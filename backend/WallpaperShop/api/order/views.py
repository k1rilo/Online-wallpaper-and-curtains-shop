from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Order
from api.cart.models import Cart
from .serializers import OrderSerializer


class OrderCreateView(APIView):
    def post(self, request):
        cart_id = request.data.get('cart_id')
        try:
            cart = Cart.objects.get(id=cart_id)
        except Cart.DoesNotExist:
            return Response({"error": "Cart not found."}, status=status.HTTP_404_NOT_FOUND)

        order = Order.objects.create(owner=request.user)

        serializer = OrderSerializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
