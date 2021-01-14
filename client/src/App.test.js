import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import About from "./Components/About";
import Registration from "./Components/Registration";
import Login from "./Components/Login";


describe('App rendered', function () {

    beforeEach(function () {
        render(<App/>);
    })

    it('logo rendered', function () {
        const logoElement = screen.getByAltText(/logo/);
        expect(logoElement).toBeInTheDocument();
    });

    it("nav login rendered", function () {
        const navElement = screen.getByText("Login")
        expect(navElement).toBeInTheDocument();
    });

    it("nav registration rendered", function () {
        const navElement = screen.getByText("Registration")
        expect(navElement).toBeInTheDocument();
    });

    it("nav home rendered", function () {
        const navElement = screen.getByText("Home")
        expect(navElement).toBeInTheDocument();
    });

    it("nav about rendered", function () {
        const navElement = screen.getByText("About")
        expect(navElement).toBeInTheDocument();
    });
});

describe('Login page rendered', function () {
    beforeEach(() => {
        render(<Login/>);
    })

    it('login header rendered', function () {
        const loginHeader = screen.getByText(/Login page/i);
        expect(loginHeader).toBeInTheDocument();
    });

    it('password label rendered', function () {
        const passwordLabel = screen.getByText(/password:/i);
        expect(passwordLabel).toBeInTheDocument();
    });

    it('login label rendered', function () {
        const passwordLabel = screen.getByText(/login:/i);
        expect(passwordLabel).toBeInTheDocument();
    });
});

describe('Registration page rendered', function () {
    it('placeholders rendered', function () {
        const component = render(<Registration/>);
        const login = component.getByPlaceholderText(/Login/i);
        const password = component.getByPlaceholderText(/Password/i);
        expect(login).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    });
});
