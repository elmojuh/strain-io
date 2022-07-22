USE StrainIo;

create table Strain (
    strainId int AUTO_INCREMENT,
    strainName varchar(255),
    strainType varchar(255),
    nickname varchar(255),
    percent_of_thc decimal,
    percentual_of_cbd decimal,
    dominantTerpene varchar(255),
    PRIMARY KEY (StrainId)
)

INSERT INTO Strain 
VALUES (1,'Gorilla GLue', 'hibrid', 'GG4', 20.0, 0.0, 'Caryophyllene');


INSERT INTO Strain 
VALUES ('Gelato', 'hibrid', 'Gelato', 16.0, 0.0, 'Caryophyllene');


INSERT INTO Strain 
VALUES ('Critical Mass', 'indic', 'GG4', 18.0, 0.0, 'Myrcene');


-- create table FeelingsStrain (
--     feelings: [varchar],
--     negativities: [varchar],
--     flavours: [varchar],
-- )