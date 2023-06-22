from rest_framework import serializers
from .models import Order, OrderItem
from api.product.serializers import SimpleProductSerializer


class OrderItemSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()

    def get_items(self, order):
        order_items = OrderItem.objects.filter(order=order)
        return OrderItemSerializer(order_items, many=True).data

    class Meta:
        model = Order
        fields = ['id', 'placed_at', 'pending_status',
                  'owner', 'grand_total', 'items']

    def get_grand_total(self, obj):
        # Calculate and return the grand total based on the items in the order
        items = obj.items.all()
        total = sum(item.product.price * item.quantity for item in items)
        return total
