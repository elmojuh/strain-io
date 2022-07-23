create table Flavours (
    flavoursId int AUTO_INCREMENT NOT NULL,
    name varchar(255),
    PRIMARY KEY (flavoursId)
);

create table FlavoursStrain (
    id int AUTO_INCREMENT NOT NULL,
    strainID int NOT NULL,
    flavoursId int NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (strainId) REFERENCES Strain(strainId),
	FOREIGN KEY (flavoursId) REFERENCES Flavours(flavoursId)
);