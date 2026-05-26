def design_system(intent):

    app_type = intent.get("app_type")

    if app_type == "ecommerce":

        pages = [
            "home",
            "products",
            "cart",
            "checkout"
        ]

    elif app_type == "hospital":

        pages = [
            "patients",
            "appointments",
            "doctors"
        ]

    elif app_type == "lms":

        pages = [
            "courses",
            "students",
            "lessons"
        ]

    else:

        pages = [
            "login",
            "dashboard",
            "contacts"
        ]

    return {
        "app_type": app_type,
        "pages": pages,
        "entities": intent["entities"],
        "roles": intent["roles"]
    }