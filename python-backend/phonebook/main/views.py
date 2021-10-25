from django.shortcuts import render
from django.http.response import JsonResponse
from main.models import PhoneNo
import json
# Create your vie'ws here.
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def create(request):
    if request.method == 'GET':
        print("request")
        name = request.GET['name']
        phoneno= request.GET['phoneno']
        print(name)
        newobj = PhoneNo(name=name,phoneno=phoneno)
        newobj.save()

    return JsonResponse({'name':name,'phoneno':phoneno})

def read(request):
    allobject=[]
    obj= PhoneNo.objects.all()
    for i in obj:
        objectdict = {
            'id':i.id,
            'name':i.name,
            'phoneno':i.phoneno,
        }
        allobject.append(objectdict)
        print(i.name)

    return JsonResponse(allobject,safe=False)

def update(request):
    if request.method == 'GET':
        obj= PhoneNo.objects.get(id=request.GET['id'])
        obj.phoneno = request.GET['phoneno']
        obj.name=request.GET['name']
        obj.save()

    return JsonResponse({'resutl':'success'})

def delete(request):
    if request.method == 'GET':
        obj= PhoneNo.objects.get(id=request.GET['id'])
        obj.delete()

    return JsonResponse({'resutl':'success'})
