USE [master]
GO
/****** Object:  Database [MainIRCTCDb]    Script Date: 24-02-2020 17:00:22 ******/
CREATE DATABASE [MainIRCTCDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MainIRCTCDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQL2017\MSSQL\DATA\MainIRCTCDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MainIRCTCDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQL2017\MSSQL\DATA\MainIRCTCDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [MainIRCTCDb] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MainIRCTCDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MainIRCTCDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MainIRCTCDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MainIRCTCDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MainIRCTCDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MainIRCTCDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MainIRCTCDb] SET  MULTI_USER 
GO
ALTER DATABASE [MainIRCTCDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MainIRCTCDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MainIRCTCDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MainIRCTCDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MainIRCTCDb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MainIRCTCDb] SET QUERY_STORE = OFF
GO
USE [MainIRCTCDb]
GO
/****** Object:  Schema [core]    Script Date: 24-02-2020 17:00:22 ******/
CREATE SCHEMA [core]
GO
/****** Object:  Table [dbo].[TrainAvailable]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainAvailable](
	[TrainAvailableId] [int] IDENTITY(1,1) NOT NULL,
	[TrainId] [int] NOT NULL,
	[TrainAvailableDay] [varchar](50) NOT NULL,
 CONSTRAINT [PK_TrainAvailable] PRIMARY KEY CLUSTERED 
(
	[TrainAvailableId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Trains]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Trains](
	[TrainId] [int] IDENTITY(1,1) NOT NULL,
	[TrainName] [varchar](50) NOT NULL,
	[TrainStartingPoint] [varchar](50) NOT NULL,
	[TrainEndingPoint] [varchar](50) NOT NULL,
	[TrainArriveTime] [time](7) NOT NULL,
	[TrainDepartTime] [time](7) NOT NULL,
	[TrainFarePerKm] [float] NOT NULL,
 CONSTRAINT [PK_Trains] PRIMARY KEY CLUSTERED 
(
	[TrainId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stations]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stations](
	[StationId] [int] IDENTITY(1,1) NOT NULL,
	[TrainId] [int] NOT NULL,
	[StationStartingPoint] [varchar](50) NOT NULL,
	[StationEndingPoint] [varchar](50) NOT NULL,
	[StationDistance] [float] NOT NULL,
 CONSTRAINT [PK_Stations_1] PRIMARY KEY CLUSTERED 
(
	[StationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StationDetails]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StationDetails](
	[StationDeatilId] [int] IDENTITY(1,1) NOT NULL,
	[StationId] [int] NOT NULL,
	[StationArriveTime] [time](7) NOT NULL,
	[StationDepartTime] [time](7) NOT NULL,
 CONSTRAINT [PK_StationDetails] PRIMARY KEY CLUSTERED 
(
	[StationDeatilId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrainApplicationObject]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainApplicationObject](
	[TrainApplicationObjectId] [int] IDENTITY(1,1) NOT NULL,
	[TrainApplicationObjectTypeId] [int] NOT NULL,
	[TrainApplicationObjectClassName] [varchar](50) NOT NULL,
	[TrainApplicationObjectFare] [float] NOT NULL,
 CONSTRAINT [PK_TrainApplicationObject] PRIMARY KEY CLUSTERED 
(
	[TrainApplicationObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrainApplicationObjectType]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainApplicationObjectType](
	[TrainApplicationObjectTypeId] [int] IDENTITY(1,1) NOT NULL,
	[TrainId] [int] NOT NULL,
	[TrainObjectTypeName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_TrainApplicationObjectType] PRIMARY KEY CLUSTERED 
(
	[TrainApplicationObjectTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[vSearchTrain]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[vSearchTrain]
AS
SELECT        dbo.Trains.TrainName, dbo.Stations.StationStartingPoint, dbo.Stations.StationEndingPoint, dbo.StationDetails.StationArriveTime, dbo.StationDetails.StationDepartTime, dbo.TrainApplicationObjectType.TrainObjectTypeName, 
                         dbo.TrainAvailable.TrainAvailableDay, dbo.TrainApplicationObject.TrainApplicationObjectClassName, dbo.Stations.StationDistance, dbo.Trains.TrainFarePerKm, dbo.TrainApplicationObject.TrainApplicationObjectFare
FROM            dbo.Trains INNER JOIN
                         dbo.Stations ON dbo.Trains.TrainId = dbo.Stations.TrainId INNER JOIN
                         dbo.StationDetails ON dbo.Stations.StationId = dbo.StationDetails.StationId INNER JOIN
                         dbo.TrainApplicationObjectType ON dbo.Trains.TrainId = dbo.TrainApplicationObjectType.TrainId INNER JOIN
                         dbo.TrainAvailable ON dbo.Trains.TrainId = dbo.TrainAvailable.TrainId INNER JOIN
                         dbo.TrainApplicationObject ON dbo.TrainApplicationObjectType.TrainApplicationObjectTypeId = dbo.TrainApplicationObject.TrainApplicationObjectTypeId
GO
/****** Object:  Table [dbo].[ApplicationLocales]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationLocales](
	[ApplicationLocaleId] [int] IDENTITY(1,1) NOT NULL,
	[LocaleCode] [varchar](50) NOT NULL,
	[LocaleName] [nvarchar](300) NOT NULL,
	[StatusId] [int] NOT NULL,
 CONSTRAINT [PK_ApplicationLocales] PRIMARY KEY CLUSTERED 
(
	[ApplicationLocaleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApplicationTimeZones]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationTimeZones](
	[ApplicationTimeZoneId] [int] IDENTITY(1,1) NOT NULL,
	[ApplicationTimeZoneName] [nvarchar](100) NOT NULL,
	[Comment] [nvarchar](200) NOT NULL,
	[StatusId] [int] NOT NULL,
 CONSTRAINT [PK_TimeZones] PRIMARY KEY CLUSTERED 
(
	[ApplicationTimeZoneId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[ApplicationLocaleId] [int] NOT NULL,
	[ApplicationTimeZoneId] [int] NOT NULL,
	[LanguageCode] [varchar](3) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Password] [binary](132) NOT NULL,
	[Salt] [binary](140) NOT NULL,
	[LoginBlocked] [bit] NOT NULL,
	[StatusId] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[vUsers]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[vUsers]
AS
SELECT        appuser.UserId, timezone.ApplicationTimeZoneName, appuser.LanguageCode, appuser.UserName, appuser.Password, appuser.Salt, appuser.LoginBlocked, locale.LocaleCode
FROM            dbo.Users AS appuser INNER JOIN
                         dbo.ApplicationLocales AS locale ON appuser.ApplicationLocaleId = locale.ApplicationLocaleId INNER JOIN
                         dbo.ApplicationTimeZones AS timezone ON appuser.ApplicationTimeZoneId = timezone.ApplicationTimeZoneId
GO
/****** Object:  Table [dbo].[ApplicationModules]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationModules](
	[ApplicationModuleId] [int] IDENTITY(1,1) NOT NULL,
	[ModuleMasterId] [int] NOT NULL,
	[ParentApplicationModuleId] [int] NULL,
 CONSTRAINT [PK_ApplicationModules] PRIMARY KEY CLUSTERED 
(
	[ApplicationModuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApplicationObjects]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationObjects](
	[ApplicationObjectId] [int] IDENTITY(1,1) NOT NULL,
	[ApplicationObjectTypeId] [int] NOT NULL,
	[ApplicationObjectName] [varchar](100) NOT NULL,
	[StatusId] [int] NOT NULL,
 CONSTRAINT [PK_ApplicationObjects] PRIMARY KEY CLUSTERED 
(
	[ApplicationObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApplicationObjectTypes]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationObjectTypes](
	[ApplicationObjectTypeId] [int] IDENTITY(1,1) NOT NULL,
	[ApplicationObjectTypeName] [varchar](100) NOT NULL,
	[StatusId] [int] NOT NULL,
 CONSTRAINT [PK_ApplicationObjectTypes] PRIMARY KEY CLUSTERED 
(
	[ApplicationObjectTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApplicationUserTokens]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationUserTokens](
	[ApplicationUserTokenId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[SecurityKey] [varchar](200) NOT NULL,
	[JwtToken] [varchar](max) NOT NULL,
	[AudienceType] [varchar](50) NOT NULL,
	[CreatedDateTime] [datetimeoffset](7) NOT NULL,
 CONSTRAINT [PK_ApplicationUserTokens] PRIMARY KEY CLUSTERED 
(
	[ApplicationUserTokenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cards]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cards](
	[CardId] [int] IDENTITY(1,1) NOT NULL,
	[CardExpiryMonth] [int] NOT NULL,
	[CardExpiryYear] [int] NOT NULL,
	[CardCvv] [int] NOT NULL,
 CONSTRAINT [PK_Cards] PRIMARY KEY CLUSTERED 
(
	[CardId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cities]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cities](
	[CitiId] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Cities] PRIMARY KEY CLUSTERED 
(
	[CitiId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ComponentLanguageContents]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ComponentLanguageContents](
	[ComponentLanguageContentId] [int] IDENTITY(1,1) NOT NULL,
	[ComponentKeyId] [int] NOT NULL,
	[LanguageContentId] [int] NOT NULL,
	[En] [varchar](max) NULL,
	[Fr] [varchar](max) NULL,
 CONSTRAINT [PK_ModuleProperties] PRIMARY KEY CLUSTERED 
(
	[ComponentLanguageContentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[FullName] [varchar](50) NOT NULL,
	[Gender] [varchar](50) NOT NULL,
	[UserDob] [date] NULL,
	[Country] [varchar](50) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[MobileNumber] [varchar](50) NOT NULL,
	[Address] [varchar](100) NOT NULL,
	[PinCode] [int] NOT NULL,
	[AadharCardNumber] [bigint] NOT NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EWallet]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EWallet](
	[EWalletId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PaymentId] [int] NOT NULL,
	[EWalletBalance] [float] NOT NULL,
 CONSTRAINT [PK_EWallet] PRIMARY KEY CLUSTERED 
(
	[EWalletId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelBooking]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelBooking](
	[HotelBookingId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[HotelId] [int] NOT NULL,
	[UserCheckInDate] [date] NOT NULL,
	[UserCheckOutDate] [date] NOT NULL,
 CONSTRAINT [PK_HotelBooking] PRIMARY KEY CLUSTERED 
(
	[HotelBookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelBookingReview]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelBookingReview](
	[HotelBookigReviewId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[HotelBookigReviewTotalPrice] [float] NOT NULL,
	[HotelBookingId] [int] NOT NULL,
 CONSTRAINT [PK_HotelBookingReview] PRIMARY KEY CLUSTERED 
(
	[HotelBookigReviewId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Hotels]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Hotels](
	[HotelId] [int] IDENTITY(1,1) NOT NULL,
	[HotelName] [varchar](50) NOT NULL,
	[HotelAddress] [varchar](50) NOT NULL,
	[HotelPricePerNight] [float] NOT NULL,
	[CityId] [int] NOT NULL,
 CONSTRAINT [PK_Hotels] PRIMARY KEY CLUSTERED 
(
	[HotelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LanguageContentKeys]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LanguageContentKeys](
	[LanguageContentKeyId] [int] IDENTITY(1,1) NOT NULL,
	[KeyName] [varchar](50) NOT NULL,
	[IsComponent] [bit] NOT NULL,
 CONSTRAINT [PK_LanguageContentKeys] PRIMARY KEY CLUSTERED 
(
	[LanguageContentKeyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LanguageContents]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LanguageContents](
	[LanguageContentId] [int] IDENTITY(1,1) NOT NULL,
	[LanguageContentKeyId] [int] NOT NULL,
	[ContentType] [varchar](3) NOT NULL,
	[En] [varchar](max) NOT NULL,
	[Fr] [varchar](max) NULL,
 CONSTRAINT [PK_LanguageContents] PRIMARY KEY CLUSTERED 
(
	[LanguageContentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ModuleMasters]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ModuleMasters](
	[ModuleMasterId] [int] IDENTITY(1,1) NOT NULL,
	[ModuleMasterName] [varchar](100) NOT NULL,
	[StatusId] [int] NOT NULL,
 CONSTRAINT [PK_ModuleMasters] PRIMARY KEY CLUSTERED 
(
	[ModuleMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Passengers]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Passengers](
	[PassengerId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PassengerName] [varchar](50) NOT NULL,
	[PassengerAge] [int] NOT NULL,
	[PassengerGender] [varchar](10) NOT NULL,
	[PassengerCountry] [varchar](50) NOT NULL,
	[TrainId] [int] NOT NULL,
 CONSTRAINT [PK_Passengers] PRIMARY KEY CLUSTERED 
(
	[PassengerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payment]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payment](
	[PaymentId] [int] IDENTITY(1,1) NOT NULL,
	[PaymentAmount] [float] NOT NULL,
	[PaymentDate] [date] NOT NULL,
	[PaymentTime] [time](7) NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_Payment] PRIMARY KEY CLUSTERED 
(
	[PaymentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PNRGeneration]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PNRGeneration](
	[PNRId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PaymentId] [int] NOT NULL,
 CONSTRAINT [PK_PNRGeneration] PRIMARY KEY CLUSTERED 
(
	[PNRId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RolePermissions]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolePermissions](
	[RolePermissionId] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [int] NOT NULL,
	[ApplicationModuleId] [int] NOT NULL,
	[CanView] [bit] NULL,
	[CanAdd] [bit] NULL,
	[CanEdit] [bit] NULL,
	[CanDelete] [bit] NULL,
	[PermissionPriority] [int] NOT NULL,
 CONSTRAINT [PK_RolePermissions] PRIMARY KEY CLUSTERED 
(
	[RolePermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [varchar](50) NOT NULL,
	[StatusId] [int] NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserRoleId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[UserRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RolePermissions] ADD  CONSTRAINT [DF__RolePermi__NoAcc__114A936A]  DEFAULT ((0)) FOR [CanView]
GO
ALTER TABLE [dbo].[RolePermissions] ADD  CONSTRAINT [DF__RolePermi__Reado__123EB7A3]  DEFAULT ((0)) FOR [CanAdd]
GO
ALTER TABLE [dbo].[RolePermissions] ADD  CONSTRAINT [DF_RolePermissions_AllowView]  DEFAULT ((0)) FOR [CanEdit]
GO
ALTER TABLE [dbo].[RolePermissions] ADD  CONSTRAINT [DF__RolePermi__FullA__1332DBDC]  DEFAULT ((0)) FOR [CanDelete]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_LoginBlocked]  DEFAULT ((0)) FOR [LoginBlocked]
GO
ALTER TABLE [dbo].[ApplicationLocales]  WITH CHECK ADD  CONSTRAINT [FK_ApplicationLocales_ApplicationObjects] FOREIGN KEY([StatusId])
REFERENCES [dbo].[ApplicationObjects] ([ApplicationObjectId])
GO
ALTER TABLE [dbo].[ApplicationLocales] CHECK CONSTRAINT [FK_ApplicationLocales_ApplicationObjects]
GO
ALTER TABLE [dbo].[ApplicationModules]  WITH CHECK ADD  CONSTRAINT [FK_ApplicationModules_ModuleMasters] FOREIGN KEY([ModuleMasterId])
REFERENCES [dbo].[ModuleMasters] ([ModuleMasterId])
GO
ALTER TABLE [dbo].[ApplicationModules] CHECK CONSTRAINT [FK_ApplicationModules_ModuleMasters]
GO
ALTER TABLE [dbo].[ApplicationObjects]  WITH CHECK ADD  CONSTRAINT [FK_ApplicationObjects_ApplicationObjectTypes] FOREIGN KEY([ApplicationObjectTypeId])
REFERENCES [dbo].[ApplicationObjectTypes] ([ApplicationObjectTypeId])
GO
ALTER TABLE [dbo].[ApplicationObjects] CHECK CONSTRAINT [FK_ApplicationObjects_ApplicationObjectTypes]
GO
ALTER TABLE [dbo].[ApplicationTimeZones]  WITH CHECK ADD  CONSTRAINT [FK_ApplicationTimeZones_ApplicationObjects] FOREIGN KEY([StatusId])
REFERENCES [dbo].[ApplicationObjects] ([ApplicationObjectId])
GO
ALTER TABLE [dbo].[ApplicationTimeZones] CHECK CONSTRAINT [FK_ApplicationTimeZones_ApplicationObjects]
GO
ALTER TABLE [dbo].[ApplicationUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_ApplicationUserTokens_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[ApplicationUserTokens] CHECK CONSTRAINT [FK_ApplicationUserTokens_Users]
GO
ALTER TABLE [dbo].[ComponentLanguageContents]  WITH CHECK ADD  CONSTRAINT [FK_ComponentLanguageContents_LanguageContentKeys] FOREIGN KEY([ComponentKeyId])
REFERENCES [dbo].[LanguageContentKeys] ([LanguageContentKeyId])
GO
ALTER TABLE [dbo].[ComponentLanguageContents] CHECK CONSTRAINT [FK_ComponentLanguageContents_LanguageContentKeys]
GO
ALTER TABLE [dbo].[ComponentLanguageContents]  WITH CHECK ADD  CONSTRAINT [FK_ComponentLanguageContents_LanguageContents] FOREIGN KEY([LanguageContentId])
REFERENCES [dbo].[LanguageContents] ([LanguageContentId])
GO
ALTER TABLE [dbo].[ComponentLanguageContents] CHECK CONSTRAINT [FK_ComponentLanguageContents_LanguageContents]
GO
ALTER TABLE [dbo].[EWallet]  WITH CHECK ADD  CONSTRAINT [FK_EWallet_Customers] FOREIGN KEY([UserId])
REFERENCES [dbo].[Customers] ([UserId])
GO
ALTER TABLE [dbo].[EWallet] CHECK CONSTRAINT [FK_EWallet_Customers]
GO
ALTER TABLE [dbo].[HotelBooking]  WITH CHECK ADD  CONSTRAINT [FK_HotelBooking_Customers] FOREIGN KEY([UserId])
REFERENCES [dbo].[Customers] ([UserId])
GO
ALTER TABLE [dbo].[HotelBooking] CHECK CONSTRAINT [FK_HotelBooking_Customers]
GO
ALTER TABLE [dbo].[HotelBooking]  WITH CHECK ADD  CONSTRAINT [FK_HotelBooking_Hotels] FOREIGN KEY([HotelId])
REFERENCES [dbo].[Hotels] ([HotelId])
GO
ALTER TABLE [dbo].[HotelBooking] CHECK CONSTRAINT [FK_HotelBooking_Hotels]
GO
ALTER TABLE [dbo].[HotelBookingReview]  WITH CHECK ADD  CONSTRAINT [FK_HotelBookingReview_Customers] FOREIGN KEY([UserId])
REFERENCES [dbo].[Customers] ([UserId])
GO
ALTER TABLE [dbo].[HotelBookingReview] CHECK CONSTRAINT [FK_HotelBookingReview_Customers]
GO
ALTER TABLE [dbo].[Hotels]  WITH CHECK ADD  CONSTRAINT [FK_Hotels_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([CitiId])
GO
ALTER TABLE [dbo].[Hotels] CHECK CONSTRAINT [FK_Hotels_Cities]
GO
ALTER TABLE [dbo].[LanguageContents]  WITH CHECK ADD  CONSTRAINT [FK_LanguageContents_LanguageContentKeys] FOREIGN KEY([LanguageContentKeyId])
REFERENCES [dbo].[LanguageContentKeys] ([LanguageContentKeyId])
GO
ALTER TABLE [dbo].[LanguageContents] CHECK CONSTRAINT [FK_LanguageContents_LanguageContentKeys]
GO
ALTER TABLE [dbo].[ModuleMasters]  WITH CHECK ADD  CONSTRAINT [FK_ModuleMasters_ApplicationObjects] FOREIGN KEY([StatusId])
REFERENCES [dbo].[ApplicationObjects] ([ApplicationObjectId])
GO
ALTER TABLE [dbo].[ModuleMasters] CHECK CONSTRAINT [FK_ModuleMasters_ApplicationObjects]
GO
ALTER TABLE [dbo].[Passengers]  WITH CHECK ADD  CONSTRAINT [FK_Passengers_Customers] FOREIGN KEY([UserId])
REFERENCES [dbo].[Customers] ([UserId])
GO
ALTER TABLE [dbo].[Passengers] CHECK CONSTRAINT [FK_Passengers_Customers]
GO
ALTER TABLE [dbo].[Passengers]  WITH CHECK ADD  CONSTRAINT [FK_Passengers_Trains] FOREIGN KEY([TrainId])
REFERENCES [dbo].[Trains] ([TrainId])
GO
ALTER TABLE [dbo].[Passengers] CHECK CONSTRAINT [FK_Passengers_Trains]
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD  CONSTRAINT [FK_Payment_Customers] FOREIGN KEY([UserId])
REFERENCES [dbo].[Customers] ([UserId])
GO
ALTER TABLE [dbo].[Payment] CHECK CONSTRAINT [FK_Payment_Customers]
GO
ALTER TABLE [dbo].[PNRGeneration]  WITH CHECK ADD  CONSTRAINT [FK_PNRGeneration_Customers] FOREIGN KEY([UserId])
REFERENCES [dbo].[Customers] ([UserId])
GO
ALTER TABLE [dbo].[PNRGeneration] CHECK CONSTRAINT [FK_PNRGeneration_Customers]
GO
ALTER TABLE [dbo].[PNRGeneration]  WITH CHECK ADD  CONSTRAINT [FK_PNRGeneration_PNRGeneration] FOREIGN KEY([PNRId])
REFERENCES [dbo].[PNRGeneration] ([PNRId])
GO
ALTER TABLE [dbo].[PNRGeneration] CHECK CONSTRAINT [FK_PNRGeneration_PNRGeneration]
GO
ALTER TABLE [dbo].[RolePermissions]  WITH CHECK ADD  CONSTRAINT [FK_RolePermissions_ApplicationModules] FOREIGN KEY([ApplicationModuleId])
REFERENCES [dbo].[ApplicationModules] ([ApplicationModuleId])
GO
ALTER TABLE [dbo].[RolePermissions] CHECK CONSTRAINT [FK_RolePermissions_ApplicationModules]
GO
ALTER TABLE [dbo].[RolePermissions]  WITH CHECK ADD  CONSTRAINT [FK_RolePermissions_Roles] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[RolePermissions] CHECK CONSTRAINT [FK_RolePermissions_Roles]
GO
ALTER TABLE [dbo].[Roles]  WITH CHECK ADD  CONSTRAINT [FK_Roles_ApplicationObjects] FOREIGN KEY([StatusId])
REFERENCES [dbo].[ApplicationObjects] ([ApplicationObjectId])
GO
ALTER TABLE [dbo].[Roles] CHECK CONSTRAINT [FK_Roles_ApplicationObjects]
GO
ALTER TABLE [dbo].[Roles]  WITH CHECK ADD  CONSTRAINT [FK_Roles_ApplicationObjects1] FOREIGN KEY([StatusId])
REFERENCES [dbo].[ApplicationObjects] ([ApplicationObjectId])
GO
ALTER TABLE [dbo].[Roles] CHECK CONSTRAINT [FK_Roles_ApplicationObjects1]
GO
ALTER TABLE [dbo].[StationDetails]  WITH CHECK ADD  CONSTRAINT [FK_StationDetails_Stations] FOREIGN KEY([StationId])
REFERENCES [dbo].[Stations] ([StationId])
GO
ALTER TABLE [dbo].[StationDetails] CHECK CONSTRAINT [FK_StationDetails_Stations]
GO
ALTER TABLE [dbo].[Stations]  WITH CHECK ADD  CONSTRAINT [FK_Stations_Trains] FOREIGN KEY([TrainId])
REFERENCES [dbo].[Trains] ([TrainId])
GO
ALTER TABLE [dbo].[Stations] CHECK CONSTRAINT [FK_Stations_Trains]
GO
ALTER TABLE [dbo].[TrainApplicationObject]  WITH CHECK ADD  CONSTRAINT [FK_TrainApplicationObject_TrainApplicationObjectType] FOREIGN KEY([TrainApplicationObjectTypeId])
REFERENCES [dbo].[TrainApplicationObjectType] ([TrainApplicationObjectTypeId])
GO
ALTER TABLE [dbo].[TrainApplicationObject] CHECK CONSTRAINT [FK_TrainApplicationObject_TrainApplicationObjectType]
GO
ALTER TABLE [dbo].[TrainApplicationObjectType]  WITH CHECK ADD  CONSTRAINT [FK_TrainApplicationObjectType_Trains] FOREIGN KEY([TrainId])
REFERENCES [dbo].[Trains] ([TrainId])
GO
ALTER TABLE [dbo].[TrainApplicationObjectType] CHECK CONSTRAINT [FK_TrainApplicationObjectType_Trains]
GO
ALTER TABLE [dbo].[TrainAvailable]  WITH CHECK ADD  CONSTRAINT [FK_TrainAvailable_Trains] FOREIGN KEY([TrainId])
REFERENCES [dbo].[Trains] ([TrainId])
GO
ALTER TABLE [dbo].[TrainAvailable] CHECK CONSTRAINT [FK_TrainAvailable_Trains]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_Roles] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_Roles]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_Users]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_ApplicationObjects] FOREIGN KEY([StatusId])
REFERENCES [dbo].[ApplicationObjects] ([ApplicationObjectId])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_ApplicationObjects]
GO
/****** Object:  StoredProcedure [dbo].[spCanDeleteRecord]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[spCanDeleteRecord](@TableName nvarchar(50), @RecordId int)
AS
BEGIN
			--DECLARE @RecordId INT=1
			--DECLARE @TableName nvarchar(50)='ApplicationModules'

			DECLARE @FkName nvarchar(250)
			DECLARE @ParentTable nvarchar(100)
			DECLARE @KeyName nvarchar(100)
			DECLARE @ReferenceTable nvarchar(100)
			DECLARE @TableSchema nvarchar(100)

			DECLARE @DynSql nvarchar(max)
			DECLARE @ReturnValue bit = 0
			CREATE TABLE #myTable(Cnt int)

			DECLARE RefCursor Cursor FOR
							SELECT
								    fk.name 'FkName',
								    tp.name 'ParentTable',
								    cp.name 'KeyName', 
									tr.name 'RefrenceTable',
									info.TABLE_SCHEMA 'TableSchema'
							FROM 
									sys.foreign_keys fk
									INNER JOIN 
									    sys.tables tp ON fk.parent_object_id = tp.object_id
									INNER JOIN 
										sys.tables tr ON fk.referenced_object_id = tr.object_id
									INNER JOIN 
										sys.foreign_key_columns fkc ON fkc.constraint_object_id = fk.object_id
									INNER JOIN 
										sys.columns cp ON fkc.parent_column_id = cp.column_id AND fkc.parent_object_id = cp.object_id
									INNER JOIN 
										sys.columns cr ON fkc.referenced_column_id = cr.column_id AND fkc.referenced_object_id = cr.object_id
						             INNER JOIN 
									    INFORMATION_SCHEMA.COLUMNS info ON tp.[name] =info.TABLE_NAME
							WHERE 
									tr.name=@TableName
									and tp.name!='Addresses' --To be removed once actual implementation done with Archi. 14-07-2017

			OPEN RefCursor
			FETCH NEXT FROM RefCursor INTO @FkName, @ParentTable, @KeyName, @ReferenceTable,@TableSchema
			WHILE @@FETCH_STATUS=0
			BEGIN
					--SELECT 	@FkName, @ParentTable, @KeyName, @ReferenceTable
					SET @DynSql	='	SELECT COUNT(*) Cnt FROM ' +@TableSchema+'.' + @ParentTable + '  WHERE ' + @KeyName + ' = ' + Cast(@RecordId as nvarchar(5))

					INSERT INTO #myTable(Cnt)
					EXEC (@DynSQL)  

					IF EXISTS(Select CNT from #myTable WHERE CNT>0)
					BEGIN
							SET @ReturnValue =1
							BREAK;
					END
					SET @DynSql=''		
					FETCH NEXT FROM RefCursor INTO @FkName, @ParentTable, @KeyName, @ReferenceTable,@TableSchema
			END
			CLOSE RefCursor
			Deallocate RefCursor
			DROP TABLE #myTable
			SELECT 1 as Id,  @ReturnValue as Result

END
GO
/****** Object:  StoredProcedure [dbo].[spSearchTrain3]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[spSearchTrain3]
@StationSP varchar(50),
@StationEP varchar(50),
@day varchar(10),
@class varchar(50)
as
select TrainName,StationStartingPoint,StationEndingPoint,StationArriveTime,StationDepartTime,TrainObjectTypeName,TrainAvailableDay,TrainApplicationObjectClassName,trainfareperkm*stationdistance as Result
from vSearchTrain where StationStartingPoint=@StationSP AND StationEndingPoint = @StationEP AND TrainAvailableDay = @day AND 
TrainApplicationObjectClassName=@class
GO
/****** Object:  StoredProcedure [dbo].[spSearchTrain4]    Script Date: 24-02-2020 17:00:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[spSearchTrain4]
@StationSP varchar(50),
@StationEP varchar(50),
@day varchar(10),
@class varchar(50)
as
select TrainName,StationStartingPoint,StationEndingPoint,StationArriveTime,StationDepartTime,TrainObjectTypeName,TrainAvailableDay,TrainApplicationObjectClassName,trainAPPLICATIONOBJECTFARE +(trainfareperkm*stationdistance) as Result
from vSearchTrain where StationStartingPoint=@StationSP AND StationEndingPoint = @StationEP AND TrainAvailableDay = @day AND 
TrainApplicationObjectClassName=@class
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Parent Application Module' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ApplicationModules', @level2type=N'COLUMN',@level2name=N'ParentApplicationModuleId'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Main Primary Key' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ApplicationObjects', @level2type=N'COLUMN',@level2name=N'ApplicationObjectId'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Application Objects is used Application wide' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ApplicationObjects'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Thid field is the reference of LanguageContentKeys table, This stores only those ids of the respective IsComponent column value is true.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ComponentLanguageContents', @level2type=N'COLUMN',@level2name=N'ComponentKeyId'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'only respective values are allowed  like for placeholder ''p'', label ''l'',gridHeader ''gh''' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'LanguageContents', @level2type=N'COLUMN',@level2name=N'ContentType'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Trains"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 201
               Right = 222
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Stations"
            Begin Extent = 
               Top = 6
               Left = 260
               Bottom = 201
               Right = 455
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "StationDetails"
            Begin Extent = 
               Top = 6
               Left = 493
               Bottom = 136
               Right = 680
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TrainApplicationObjectType"
            Begin Extent = 
               Top = 6
               Left = 718
               Bottom = 182
               Right = 964
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TrainAvailable"
            Begin Extent = 
               Top = 6
               Left = 1002
               Bottom = 188
               Right = 1185
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "TrainApplicationObject"
            Begin Extent = 
               Top = 186
               Left = 1040
               Bottom = 335
               Right = 1310
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidt' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vSearchTrain'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'hs = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vSearchTrain'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vSearchTrain'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "appuser"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 251
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "locale"
            Begin Extent = 
               Top = 6
               Left = 289
               Bottom = 136
               Right = 483
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "timezone"
            Begin Extent = 
               Top = 6
               Left = 521
               Bottom = 136
               Right = 756
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vUsers'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vUsers'
GO
USE [master]
GO
ALTER DATABASE [MainIRCTCDb] SET  READ_WRITE 
GO
