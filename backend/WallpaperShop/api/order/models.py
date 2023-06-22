from django.db import models
from accounts.models import UserAccount
from api.product.models import Product


class Order(models.Model):
    placed_at = models.DateTimeField(auto_now_add=True)
    pending_status = models.CharField(max_length=255, default="Доставляется")
    owner = models.ForeignKey(UserAccount, on_delete=models.CASCADE)

    def __str__(self):
        return f"Order {self.id}"


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, related_name='items', on_delete=models.CASCADE)
    # Assuming you have a Product model
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"OrderItem {self.id}"
