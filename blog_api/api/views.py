from rest_framework.views import APIView
from rest_framework.response import Response


class BlogList(APIView):
    def get(self, request):
        return Response(
            {"msg": "This is the blog list endpoint"}
        )
