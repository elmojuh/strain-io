create table Negativities (
    negativitiesId int AUTO_INCREMENT NOT NULL,
    name varchar(255),
    PRIMARY KEY (negativitiesId)
);

create table NegativitiesStrain (
    id int AUTO_INCREMENT NOT NULL,
    strainID int NOT NULL,
    negativitiesId int NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (strainId) REFERENCES Strain(strainId),
	FOREIGN KEY (negativitiesId) REFERENCES Negativities(negativitiesId)
);