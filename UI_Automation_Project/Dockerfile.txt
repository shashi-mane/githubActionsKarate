# Use an official Selenium standalone Chrome image as base
FROM selenium/standalone-chrome

# Set the working directory inside the container
WORKDIR /karate-tests

# Copy necessary files into the container
COPY . .

# Install Java (if not already installed in the base image)
RUN apt-get update && \
    apt-get install -y default-jre

# Set environment variable for the base URL
ENV BASE_URL=https://www.saucedemo.com/

# Command to execute the Karate tests
CMD ["java", "-jar", "karate.jar", "UI_Automation_Project/src/test/java/UI_Automation_Project/login/TestLoginRunner.java"]
