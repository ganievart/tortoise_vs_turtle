FROM python:3.7

COPY . /app

WORKDIR /app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 5000

ENV FLASK_APP=api.py
ENV FLASK_ENV=development

CMD ["flask", "run", "--host=0.0.0.0"]