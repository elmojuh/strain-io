create table Feelings (
    feelingsId int AUTO_INCREMENT NOT NULL,
    name varchar(255),
    PRIMARY KEY (feelingsId)
);

create table FeelingsStrain (
    id int AUTO_INCREMENT NOT NULL,
    strainID int NOT NULL,
    feelingsId int NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (strainId) REFERENCES Strain(strainId),
	FOREIGN KEY (feelingsId) REFERENCES Feelings(feelingsId)
);
