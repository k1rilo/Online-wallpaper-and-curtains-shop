from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from api.order.models import Order, OrderItem
from api.order.serializers import OrderSerializer
from rest_framework import serializers
from django.conf import settings


class CartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            cart = Cart.objects.get(user=request.user)
        except Cart.DoesNotExist:
            cart = Cart.objects.create(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)


class CartItemView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        serializer = CartItemSerializer(data=request.data)

        if serializer.is_valid():
            product = serializer.validated_data['product']
            quantity = serializer.validated_data['quantity']

            if product.stock == 0 or quantity > product.stock:
                return Response({"error": "Not enough stock available."}, status=status.HTTP_400_BAD_REQUEST)

            existing_items = CartItem.objects.filter(
                cart=cart, product=product)
            total_quantity = sum(
                item.quantity for item in existing_items) + quantity

            if total_quantity > product.stock:
                return Response({"error": "Exceeds available stock quantity."}, status=status.HTTP_400_BAD_REQUEST)

            try:
                item = existing_items.get()
                item.quantity += quantity
                item.save()
            except CartItem.DoesNotExist:
                item = serializer.save(cart=cart)

            serializer = CartItemSerializer(item)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, item_id):
        try:
            cart_item = CartItem.objects.get(
                id=item_id, cart__user=request.user)
            product = cart_item.product
            product.stock = min(
                product.stock + cart_item.quantity, product.stock)
            product.save()
            cart_item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except CartItem.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class OrderRequestSerializer(serializers.Serializer):
    cart_id = serializers.IntegerField()


class OrderView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = OrderRequestSerializer(data=request.data)
        if serializer.is_valid():
            cart_id = serializer.validated_data['cart_id']
            cart = Cart.objects.filter(id=cart_id, user=request.user).first()
            if not cart or not cart.items.exists():
                return Response({"error": "Cart is empty or does not exist."}, status=status.HTTP_400_BAD_REQUEST)

            serializer = OrderSerializer(data={"owner": request.user.id})
            if serializer.is_valid():
                order = serializer.save()
                for cart_item in cart.items.all():
                    OrderItem.objects.create(
                        order=order, product=cart_item.product, quantity=cart_item.quantity)

                # Calculate grand total
                grand_total = sum(cart_item.product.price *
                                  cart_item.quantity for cart_item in cart.items.all())

                # Send email with order information
                subject = 'Order Confirmation'
                context = {
                    'order': order,
                    'grand_total': grand_total
                }
                html_message = render_to_string('order_email.html', context)
                plain_message = strip_tags(html_message)
                from_email = settings.EMAIL_HOST_USER
                to_email = request.user.email
                send_mail(subject, plain_message, from_email, [
                          to_email], html_message=html_message)

                # Clear the cart
                cart.items.all().delete()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = OrderRequestSerializer(data=request.data)
        if serializer.is_valid():
            cart_id = serializer.validated_data['cart_id']
            cart = Cart.objects.filter(id=cart_id, user=request.user).first()
            if not cart or not cart.items.exists():
                return Response({"error": "Cart is empty or does not exist."}, status=status.HTTP_400_BAD_REQUEST)

            serializer = OrderSerializer(data={"owner": request.user.id})
            if serializer.is_valid():
                order = serializer.save()
                for cart_item in cart.items.all():
                    OrderItem.objects.create(
                        order=order, product=cart_item.product, quantity=cart_item.quantity)

                # Calculate grand total
                grand_total = sum(cart_item.product.price *
                                  cart_item.quantity for cart_item in cart.items.all())

                # Send email with order information
                subject = 'Order Confirmation'
                context = {
                    # Serialize the order object
                    'order': OrderSerializer(order).data,
                    'grand_total': grand_total
                }
                html_message = render_to_string('order_email.html', context)
                plain_message = strip_tags(html_message)
                from_email = settings.EMAIL_HOST_USER
                to_email = request.user.email
                send_mail(subject, plain_message, from_email, [
                          to_email], html_message=html_message)

                # Clear the cart
                cart.items.all().delete()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = OrderRequestSerializer(data=request.data)
        if serializer.is_valid():
            cart_id = serializer.validated_data['cart_id']
            cart = Cart.objects.filter(id=cart_id, user=request.user).first()
            if not cart or not cart.items.exists():
                return Response({"error": "Cart is empty or does not exist."}, status=status.HTTP_400_BAD_REQUEST)

            serializer = OrderSerializer(data={"owner": request.user.id})
            if serializer.is_valid():
                order = serializer.save()
                for cart_item in cart.items.all():
                    OrderItem.objects.create(
                        order=order, product=cart_item.product, quantity=cart_item.quantity)

                # Calculate grand total
                grand_total = sum(cart_item.product.price *
                                  cart_item.quantity for cart_item in cart.items.all())

                # Send email with order information
                subject = 'Order Confirmation'
                html_message = render_to_string('order_email.html', {
                    'order': order,
                    'grand_total': grand_total
                })
                plain_message = strip_tags(html_message)
                from_email = settings.EMAIL_HOST_USER
                to_email = request.user.email
                send_mail(subject, plain_message, from_email, [
                          to_email], html_message=html_message)

                # Clear the cart
                cart.items.all().delete()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CartClearView(APIView):
    def delete(self, request):
        try:
            cart = Cart.objects.get(user=request.user)
            cart.items.all().delete()  # Use the correct related name here
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Cart.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
