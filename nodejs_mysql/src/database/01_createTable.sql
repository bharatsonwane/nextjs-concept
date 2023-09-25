-- lookupType table
CREATE TABLE lookupType (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- lookup Table
CREATE TABLE lookup (
    id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    lookupTypeId INT NOT NULL,
    FOREIGN KEY (lookupTypeId) REFERENCES lookupType(id)
);

-- employee table
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title ENUM('mr', 'mrs', 'miss', 'ms'),
    firstName VARCHAR(255),
    middleName VARCHAR(255),
    lastName VARCHAR(255),
    maidenName VARCHAR(255),
    gender ENUM('male', 'female', 'other'),
    dob DATETIME,
    bloodGroup ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
    marriedStatus ENUM('married', 'unmarried'),
    pan VARCHAR(255),
    aadhar VARCHAR(255),
    hiringDate DATETIME,
    joiningDate DATETIME,
    modeOfWork ENUM('home', 'office', 'hybrid'),
    probationPeriodMonth INT,
    exitDate DATETIME,
    CTC VARCHAR(255),
    statusOfEmployee ENUM('active', 'inactive'),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    designationLookupId INT,
    FOREIGN KEY (designationLookupId) REFERENCES lookup(id)
);


-- users table
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255),
    status ENUM('active', 'inactive'),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    employeeId INT,
    userRoleLookupId INT,
    FOREIGN KEY (employeeId) REFERENCES employee(id),
    FOREIGN KEY (userRoleLookupId) REFERENCES lookup(id)
);

-- contact table
CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contactType ENUM('personalPhone', 'emergencyPhone', 'officialEmail', 'personalEmail') NOT NULL,
    value VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    employeeId INT,
    FOREIGN KEY (employeeId) REFERENCES employee(id)
);

CREATE TABLE address (
    id INT AUTO_INCREMENT PRIMARY KEY,
    addressType ENUM('current', 'permanent') NOT NULL,
    country VARCHAR(255) NOT NULL,
    zipCode VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    taluka VARCHAR(255) NOT NULL,
    villageCity VARCHAR(255),
    street VARCHAR(255),
    landmark VARCHAR(255),
    area VARCHAR(255),
    houseNo VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    employeeId INT,
    FOREIGN KEY (employeeId) REFERENCES employee(id)
);

-- experience table
CREATE TABLE experience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    organisationName VARCHAR(255) NOT NULL,
    startDate DATETIME, 
    endDate DATETIME, 
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    employeeId INT NOT NULL,
    designationLookupId INT,
    FOREIGN KEY (employeeId) REFERENCES employee(id),
    FOREIGN KEY (designationLookupId) REFERENCES lookup(id)
);

-- skill table
CREATE TABLE skill (
    id INT AUTO_INCREMENT PRIMARY KEY,
    skillExperienceYear INT ,
    notes VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    skillType INT NOT NULL,
    skillName INT NOT NULL,
    skillLevel INT NOT NULL,
    employeeId INT NOT NULL,
    FOREIGN KEY (skillType) REFERENCES lookup(id),
    FOREIGN KEY (skillName) REFERENCES lookup(id),
    FOREIGN KEY (skillLevel) REFERENCES lookup(id),
    FOREIGN KEY (employeeId) REFERENCES employee(id)
);


-- hobbiesRecord table
CREATE TABLE hobbiesRecord (
    id INT AUTO_INCREMENT PRIMARY KEY,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    hobbiesType INT,
    hobbiesName INT,
    employeeId INT NOT NULL,
    FOREIGN KEY (hobbiesType) REFERENCES lookup(id),
    FOREIGN KEY (hobbiesName) REFERENCES lookup(id),
    FOREIGN KEY (employeeId) REFERENCES employee(id)
);



CREATE TABLE bankDetail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bankName VARCHAR(255) NOT NULL,
    branchName VARCHAR(255),
    ifscCode VARCHAR(255) NOT NULL,
    micrCode VARCHAR(255) NOT NULL,
    accountNumber VARCHAR(255) NOT NULL,
    isActive TINYINT(1) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    employeeId INT,
    FOREIGN KEY (employeeId) REFERENCES employee(id)
);

