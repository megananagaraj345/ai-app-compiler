from schemas.app_schema import AppSchema

def validate_schema(schema):

    try:
        validated = AppSchema(**schema)

        return {
            "valid": True,
            "errors": []
        }

    except Exception as e:

        return {
            "valid": False,
            "errors": [str(e)]
        }