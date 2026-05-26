def extract_intent(prompt: str):

    prompt_lower = prompt.lower()

    app_type = "crm"

    features = []
    entities = []

    # Ecommerce
    if "ecommerce" in prompt_lower or "shop" in prompt_lower:

        app_type = "ecommerce"

        features = [
            "products",
            "cart",
            "checkout",
            "orders",
            "payments"
        ]

        entities = [
            "Product",
            "Order",
            "Cart",
            "Customer"
        ]

    # Hospital
    elif "hospital" in prompt_lower or "doctor" in prompt_lower:

        app_type = "hospital"

        features = [
            "patients",
            "appointments",
            "doctors",
            "medical_records"
        ]

        entities = [
            "Patient",
            "Doctor",
            "Appointment"
        ]

    # LMS
    elif "lms" in prompt_lower or "course" in prompt_lower:

        app_type = "lms"

        features = [
            "courses",
            "students",
            "videos",
            "assignments"
        ]

        entities = [
            "Course",
            "Student",
            "Lesson"
        ]

    # CRM DEFAULT
    else:

        app_type = "crm"

        features = [
            "authentication",
            "dashboard",
            "contacts",
            "analytics"
        ]

        entities = [
            "Contact",
            "User"
        ]

    return {
        "app_name": f"{app_type.title()} Platform",
        "app_type": app_type,
        "features": features,
        "entities": entities,
        "roles": [
            "admin",
            "user"
        ],
        "description": prompt
    }