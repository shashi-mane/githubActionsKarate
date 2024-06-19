# Use an official Selenium standalone Chrome image as base
FROM selenium/standalone-chrome

# Set the working directory inside the container
WORKDIR /karate-tests

# Copy necessary files into the container
COPY . .

# Install Java (if not already installed in the base image)
RUN apt-get update && \
    apt-get install -y default-jre

# Install Maven
RUN apt-get install -y maven

# Set environment variable for the base URL (optional, adjust as needed)
ENV BASE_URL=https://www.saucedemo.com/

# Install Karate
RUN apt-get install -y unzip
RUN wget -O karate.jar https://github.com/intuit/karate/releases/download/v1.2.0/karate-1.2.0.jar

# Command to execute the Karate tests (adjust the path to your TestLoginRunner.java)
CMD ["java", "-jar", "karate.jar", "UI_Automation_Project/src/test/java/UI_Automation_Project/login/TestLoginRunner.java"]
