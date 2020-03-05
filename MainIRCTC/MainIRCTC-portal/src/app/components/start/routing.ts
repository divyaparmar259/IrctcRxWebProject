import { Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RouteProvider } from "@rxweb/angular-router"
import { Injectable, Component } from '@angular/core';

var routings = [
	
    {
        path: '', redirectTo: 'login', pathMatch: 'full',
	},
	//  {
	//  	path:'holidaypackages' ,component:HolidaypackagesComponent
	// },
    {
        path: "login",
        loadChildren: () => import("../login/login.module").then(m => m.LoginModule),
    },

        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "cards",
			loadChildren: () => import("../card/cards/card.module").then(m => m.CardModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "cards",
			loadChildren: () => import("../card/cards/card.module").then(m => m.CardModule)
		},
        {
			path: "customer-login",
			loadChildren: () => import("../customer-login/customer-login/customer-login.module").then(m => m.CustomerLoginModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "cards",
			loadChildren: () => import("../card/cards/card.module").then(m => m.CardModule)
		},
        {
			path: "customer-login",
			loadChildren: () => import("../customer-login/customer-login/customer-login.module").then(m => m.CustomerLoginModule)
		},
        {
			path: "customers",
			loadChildren: () => import("../customer/customers/customer.module").then(m => m.CustomerModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "cards",
			loadChildren: () => import("../card/cards/card.module").then(m => m.CardModule)
		},
        {
			path: "customer-login",
			loadChildren: () => import("../customer-login/customer-login/customer-login.module").then(m => m.CustomerLoginModule)
		},
        {
			path: "customers",
			loadChildren: () => import("../customer/customers/customer.module").then(m => m.CustomerModule)
		},
        {
			path: "ewalletrefund",
			loadChildren: () => import("../ewallet/ewalletrefund/ewalletrefund.module").then(m => m.ewalletrefundModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "cards",
			loadChildren: () => import("../card/cards/card.module").then(m => m.CardModule)
		},
        {
			path: "customer-login",
			loadChildren: () => import("../customer-login/customer-login/customer-login.module").then(m => m.CustomerLoginModule)
		},
        {
			path: "customers",
			loadChildren: () => import("../customer/customers/customer.module").then(m => m.CustomerModule)
		},
        {
			path: "ewalletrefund",
			loadChildren: () => import("../ewallet/ewalletrefund/ewalletrefund.module").then(m => m.ewalletrefundModule)
		},
        {
			path: "hotel-bookings",
			loadChildren: () => import("../hotel-booking/hotel-bookings/hotel-booking.module").then(m => m.HotelBookingModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "cards",
			loadChildren: () => import("../card/cards/card.module").then(m => m.CardModule)
		},
        {
			path: "customer-login",
			loadChildren: () => import("../customer-login/customer-login/customer-login.module").then(m => m.CustomerLoginModule)
		},
        {
			path: "customers",
			loadChildren: () => import("../customer/customers/customer.module").then(m => m.CustomerModule)
		},
        {
			path: "ewalletrefund",
			loadChildren: () => import("../ewallet/ewalletrefund/ewalletrefund.module").then(m => m.ewalletrefundModule)
		},
        {
			path: "hotel-bookings",
			loadChildren: () => import("../hotel-booking/hotel-bookings/hotel-booking.module").then(m => m.HotelBookingModule)
		},
        {
			path: "hotel-invoices",
			loadChildren: () => import("../hotel-invoice/hotel-invoices/hotel-invoice.module").then(m => m.HotelInvoiceModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "cards",
			loadChildren: () => import("../card/cards/card.module").then(m => m.CardModule)
		},
        {
			path: "customer-login",
			loadChildren: () => import("../customer-login/customer-login/customer-login.module").then(m => m.CustomerLoginModule)
		},
        {
			path: "customers",
			loadChildren: () => import("../customer/customers/customer.module").then(m => m.CustomerModule)
		},
        {
			path: "ewalletrefund",
			loadChildren: () => import("../ewallet/ewalletrefund/ewalletrefund.module").then(m => m.ewalletrefundModule)
		},
        {
			path: "hotel-bookings",
			loadChildren: () => import("../hotel-booking/hotel-bookings/hotel-booking.module").then(m => m.HotelBookingModule)
		},
        {
			path: "hotel-invoices",
			loadChildren: () => import("../hotel-invoice/hotel-invoices/hotel-invoice.module").then(m => m.HotelInvoiceModule)
		},
        {
			path: "hotel-list",
			loadChildren: () => import("../hotel-list/hotel-list/hotel-list.module").then(m => m.HotelListModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "cards",
			loadChildren: () => import("../card/cards/card.module").then(m => m.CardModule)
		},
        {
			path: "customer-login",
			loadChildren: () => import("../customer-login/customer-login/customer-login.module").then(m => m.CustomerLoginModule)
		},
        {
			path: "customers",
			loadChildren: () => import("../customer/customers/customer.module").then(m => m.CustomerModule)
		},
        {
			path: "ewalletrefund",
			loadChildren: () => import("../ewallet/ewalletrefund/ewalletrefund.module").then(m => m.ewalletrefundModule)
		},
        {
			path: "hotel-bookings",
			loadChildren: () => import("../hotel-booking/hotel-bookings/hotel-booking.module").then(m => m.HotelBookingModule)
		},
        {
			path: "hotel-invoices",
			loadChildren: () => import("../hotel-invoice/hotel-invoices/hotel-invoice.module").then(m => m.HotelInvoiceModule)
		},
        {
			path: "hotel-list",
			loadChildren: () => import("../hotel-list/hotel-list/hotel-list.module").then(m => m.HotelListModule)
		},
        {
			path: "pnrs",
			loadChildren: () => import("../p-n-r/pnrs/pnr.module").then(m => m.pnrModule)
		},
        {
			path: "pnrsgeneration",
			loadChildren: () => import("../p-n-r/pnrsgeneration/pnrsgeneration.module").then(m => m.pnrsgenerationModule)
		},
        {
			path: "city",
			loadChildren: () => import("../admin-hotel/city/city.module").then(m => m.CityModule)
		},
        {
			path: "hotel",
			loadChildren: () => import("../admin-hotel/hotel/hotel.module").then(m => m.HotelModule)
		},
        {
			path: "station",
			loadChildren: () => import("../admin-train/station/station.module").then(m => m.StationModule)
		},
        {
			path: "station-detail",
			loadChildren: () => import("../admin-train/station-detail/station-detail.module").then(m => m.StationDetailModule)
		},
        {
			path: "train-application-object",
			loadChildren: () => import("../admin-train/train-application-object/train-application-object.module").then(m => m.TrainApplicationObjectModule)
		},
        {
			path: "train-application-object-type",
			loadChildren: () => import("../admin-train/train-application-object-type/train-application-object-type.module").then(m => m.TrainApplicationObjectTypeModule)
		},
        {
			path: "train-available",
			loadChildren: () => import("../admin-train/train-available/train-available.module").then(m => m.TrainAvailableModule)
		},
        {
			path: "train",
			loadChildren: () => import("../admin-train/train/train.module").then(m => m.TrainModule)
		},
        {
			path: "book-passengers",
			loadChildren: () => import("../book-passenger/book-passengers/book-passenger.module").then(m => m.BookPassengerModule)
		},
        {
			path: "cancellations",
			loadChildren: () => import("../cancellation/cancellations/cancellation.module").then(m => m.CancellationModule)
		},
        {
			path: "cards",
			loadChildren: () => import("../card/cards/card.module").then(m => m.CardModule)
		},
        {
			path: "customer-login",
			loadChildren: () => import("../customer-login/customer-login/customer-login.module").then(m => m.CustomerLoginModule)
		},
        {
			path: "customers",
			loadChildren: () => import("../customer/customers/customer.module").then(m => m.CustomerModule)
		},
        {
			path: "ewalletrefund",
			loadChildren: () => import("../ewallet/ewalletrefund/ewalletrefund.module").then(m => m.ewalletrefundModule)
		},
        {
			path: "hotel-bookings",
			loadChildren: () => import("../hotel-booking/hotel-bookings/hotel-booking.module").then(m => m.HotelBookingModule)
		},
        {
			path: "hotel-invoices",
			loadChildren: () => import("../hotel-invoice/hotel-invoices/hotel-invoice.module").then(m => m.HotelInvoiceModule)
		},
        {
			path: "hotel-list",
			loadChildren: () => import("../hotel-list/hotel-list/hotel-list.module").then(m => m.HotelListModule)
		},
        {
			path: "pnrs",
			loadChildren: () => import("../p-n-r/pnrs/pnr.module").then(m => m.pnrModule)
		},
        {
			path: "pnrsgeneration",
			loadChildren: () => import("../p-n-r/pnrsgeneration/pnrsgeneration.module").then(m => m.pnrsgenerationModule)
		},
        {
			path: "passenger-details",
			loadChildren: () => import("../train/passenger-details/passenger-detail.module").then(m => m.PassengerDetailModule)
		},
        {
			path: "passenger-invoice-details",
			loadChildren: () => import("../train/passenger-invoice-details/passenger-invoice-detail.module").then(m => m.PassengerInvoiceDetailModule)
		},
        {
			path: "train-bookings",
			loadChildren: () => import("../train/train-bookings/train-booking.module").then(m => m.TrainBookingModule)
		},
        {
			path: "v-passenger-invoice",
			loadChildren: () => import("../train/v-passenger-invoice/v-passenger-invoice.module").then(m => m.vPassengerInvoiceModule)
		}
//generated code
//])
	]

export const ROUTES: Routes = routings;







console.log(ROUTES)

