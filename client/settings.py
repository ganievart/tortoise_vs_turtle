import os


def get_images_query() -> str:
    comma_separated = os.getenv("images_keywords", default="turtle,tortoise")
    return "|".join(values.strip() for values in comma_separated.split(","))
