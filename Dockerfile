# First stage: build the React application
FROM node:16.13.1-alpine as react-build
WORKDIR /app
# COPY build/ .
RUN npm install
RUN npm run build

# Second stage: build the Flask and Python environment
FROM python:3.7
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY *.py .flaskenv ./
COPY --from=react-build build/ /app/static/
COPY build /app/static/
ENV FLASK_APP=app.py
EXPOSE 5000
CMD ["gunicorn", "-b", ":5000", "app:app"]