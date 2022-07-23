USE StrainIo;

create table Strain (
    strainId int NOT NULL AUTO_INCREMENT,
    strainName varchar(255),
    strainType varchar(255),
    nickname varchar(255),
    percent_of_thc decimal,
    percent_of_cbd decimal,
    dominantTerpene varchar(255),
    PRIMARY KEY (StrainId)
);

-- create table FeelingsStrain (
--     feelings: [varchar],
--     negativities: [varchar],
--     flavours: [varchar],
-- )