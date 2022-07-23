SELECT * FROM STRAIN;

SELECT * FROM Feelings;
SELECT * FROM FeelingsStrain;

SELECT  s.*, f.name as Feeling
FROM FeelingsStrain as fs
INNER JOIN Strain as s on s.strainId = fs.strainId
INNER JOIN Feelings as f on f.feelingsId = fs.feelingsId
order by s.strainId;

SELECT  s.*, n.name as Negativities
FROM NegativitiesStrain as ns
INNER JOIN Strain as s on s.strainId = ns.strainId
INNER JOIN Negativities as n on n.negativitiesId = ns.negativitiesId
order by s.strainId;

SELECT  s.*, f.name as Flavours
FROM FlavoursStrain as ns
INNER JOIN Strain as s on s.strainId = ns.strainId
INNER JOIN Flavours as f on f.flavoursId = ns.flavoursId
order by s.strainId;

SELECT  s.*, f.name as Feeling, fl.name as Flavours, n.name as Negativities
FROM FeelingsStrain as fs
LEFT JOIN NegativitiesStrain as ns on ns.strainId = fs.strainId
LEFT  JOIN FlavoursStrain as fls on fls.strainId = fs.strainId
INNER JOIN Strain as s on s.strainId = fs.strainId
INNER JOIN Feelings as f on f.feelingsId = fs.feelingsId
INNER JOIN Flavours as fl on fl.flavoursId = fls.flavoursId
INNER JOIN Negativities as n on n.negativitiesId = ns.negativitiesId
order by s.strainId;

SELECT s.*, f.name as Feelings 
FROM Strain s, Feelings f, FeelingsStrain fs, Negativities n, NegativitiesStrain ns
WHERE f.feelingsId = fs.feelingsId
-- AND (t.name IN ('bookmark', 'webservice', 'semweb'))
AND s.strainId = fs.strainId
-- GROUP BY 

SELECT * FROM Negativities;
SELECT * FROM NegativitiesStrain;

SELECT * FROM Flavours;
SELECT * FROM FlavoursStrain;

DROP  TABLE Feelings;
DROP  TABLE Negativities;
DROP  TABLE Flavours;
DROP  TABLE FeelingsStrain;
DROP  TABLE NegativitiesStrain;
DROP  TABLE FlavoursStrain;
DROP  TABLE STRAIN;