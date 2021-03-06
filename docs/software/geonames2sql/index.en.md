---
title: GeoNames2Sql
description: Build and maintain a SQL database using GeoNames Gazetteer data
keywords: GeoNames, gazetteer, placenames, toponmy, SQL, SQL Server, C#, .NET Core
github: https://github.com/gaois/GeoNames2Sql
public: true
---

GeoNames2Sql is a tool built by the [Gaois research group](https://www.gaois.ie) in Fiontar & Scoil na Gaeilge, DCU to import Gazetteer data from the [GeoNames geographical database](http://www.geonames.org/) and store it in a SQL Server instance. It is essentially an abstraction over the [NGeoNames](https://github.com/RobThree/NGeoNames) library, adding a Command-line Interface and the tools to generate a SQL database. GeoNames2Sql is implemented in C# as a .NET Core 2.1 Console Application, meaning it can run cross-platform. This implementation presumes a SQL Server data store but it should be relatively simple to implement providers for PostgreSQL or other relational database types.

## Status

This application addresses the requirements of the Gaois research group. It is not, as yet, comprehensive for all other use cases. The output data set includes tables for GeoNames, alternate names and country info. There is not, at this time, provision for feature codes, admin codes, time zones and the other reference lists included in the full GeoNames data set as these items fall outside the scope of our requirements. These items may be included in the future, if the need arises, and we also welcome pull requests from other users.

## Installation and setup

### Database

1. Give the application permissions to a database.
2. Run the [SQL script](https://github.com/gaois/GeoNames2Sql/blob/master/scripts/CreateTables.sql) to create the database tables.
3. Optionally, create indexes for your tables. Some sample indexes are provided [here](https://github.com/gaois/GeoNames2Sql/blob/master/scripts/CreateIndexes.sql).

The database schema mirrors the GeoNames Gazetteer data structure described [here](http://download.geonames.org/export/dump/).

### Application

Clone the repository to your machine:

```cmd
git clone https://github.com/gaois/GeoNames2Sql
```

Then, publish the .NET Core project in `src/GeoNames2Sql`, specifying your target runtime environment, e.g.:

```cmd
dotnet publish -r win10-x64
```

**Tip:** See a list of target runtime identifiers [here](https://docs.microsoft.com/en-us/dotnet/core/rid-catalog?irgwc=1&OCID=AID681541_aff_7593_1243925&tduid=(ir_6d4f9ce9N213458eb7517c20a2b9db916)(7593)(1243925)(je6NUbpObpQ-wDYfcuMFmHDb6Ja3HC_Ryw)()&irclickid=6d4f9ce9N213458eb7517c20a2b9db916#using-rids?ranMID=24542&ranEAID=je6NUbpObpQ&ranSiteID=je6NUbpObpQ-wDYfcuMFmHDb6Ja3HC_Ryw&epi=je6NUbpObpQ-wDYfcuMFmHDb6Ja3HC_Ryw).

This will output a collection of dynamic linked libraries (.dll files) and an appsettings.json file. Copy these files to the directory in which you wish to run the program, if necessary. Alternatively, you can just run the application from within Visual Studio.

## Usage

GeoNames2Sql allows you to compose the contents of your output database. For example, you may not need in-depth coverage of all countries in the world or you may only need a subset of alternate language data. The exact makeup of the target database can be specified within the configuration file.

### Configuration

Use the **appsettings.json** file to configure your target database, e.g.:

```json
{
  "ConnectionString": "Server=localhost;Database=geonames;Trusted_Connection=True;",
  "DataDirectory": "C:/PATH/TO/DIRECTORY",
  "GeoNames": {
    "AllCountries": false,
    "AlternateNamesLanguages": [ "en", "ga" ],
    "CitiesMinimumPopulation": 15000,
    "Countries": ["AT", "BE", "CA", "CH", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "IE", "IM", "IT", "LU", "MT", "NL", "NO", "PL", "PT", "US", "SE", "no-country" ],
    "CountryInfo": true
  }
}
```

The table below outlines the configuration properties.

| Key | Description |
| --- | ----------- |
| **ConnectionString** | SQL Server database connection string. | Note that a connection string for a Sqlite DB must include the `Data Source=` prefix |
| **DataDirectory** | Where you intend to store the raw data dump files which will be downloaded from the GeoNames data store prior to database insert. |
| **GeoNames:AllCountries** | If true, GeoNames data will be retrieved for all countries in the GeoNames Gazetteer. If true, neither the `CitiesMinimumPopulation` nor `Countries` values need be specified. |
| **GeoNames:AlternateNamesLanguages** | Specify the languages for which you wish to have alternate toponymic names. Provide a comma-separated array of ISO two-letter language codes. If empty, no alternate languages data will be downloaded. |
| **GeoNames:CitiesMinimumPopulation** | If set, GeoNames data will be retrieved for all cities with at least the minimum population specified. The possible values are **500**, **1,000**, **5,000** or **15,000**. |
| **GeoNames:Countries** | If set, GeoNames data pertaining to the specified countries will be retrieved. Provide a comma-separated array of ISO Alpha-2 country codes. |
| **GeoNames:CountryInfo** | If true, the CountryInfo table will be populated. |

Note that the configuration describes an additive model. For example, the sample configuration above will output a database with the following characteristics:

- It will contain all GeoNames data for a specified list of countries.
- It will also contain GeoNames data for all cities globally with a population of over 15,000.
- It will populate the AlternateNames table with data in two languages.
- It will populate the CountryInfo table with all relevant data.

Some other points to note:

- You will not need to retrieve the GeoNames raw data dumps yourself. The application will do this for you. This is why you specify the `DataDirectory` where these files will be stored.
- Some GeoNames raw text files range from 0.5-1.5GB unzipped, depending on the configuration you choose. Ensure you have adequate disk space on the drive where your `DataDirectory` is located.
- The time it takes to populate the database varies according to the configuration, e.g. whether all countries or a subset of countries are specified, how many alternate languages are specified, etc.

### Populating the database

Having specified the configuration you can now run the program. Change directory to the location of the published GeoName2Sql program and run the following command:

```
dotnet ./GeoNames2Sql.dll
```

The program will start, validate your configuration and describe the makeup of the output database. Follow the instructions on screen to proceed.

![GeoNames2Sql Command-line Interface](/images/geonames2sql.jpg)

### Updating the database

The GeoNames Gazetteer is updated on an ongoing basis and you may want to periodically bring the data in your SQL database up to speed with the latest changes. To do this, simply re-run the program. GeoNames2Sql will merge any updated data into the current database in a performant manner: no valid pre-existing data are thrown away and the process should not place any undue load on the target database, even in production environments. If you wish to alter the makeup of your target database, for example, to include data from additional countries or extra alternate languages, you only need to update the configuration file accordingly.
