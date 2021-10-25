class CorsMiddleware(object):
    def process_response(self,req,res):
        response["Access-Control-Allow-Origin"]= "*"
        return response