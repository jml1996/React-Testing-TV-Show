import React from 'react';
import { getAllByTestId, render, screen, wait } from "@testing-library/react";
import App from './App';
// import Dropdown from 'react-dropdown';
import Episodes from './components/Episodes';
import userEvent from '@testing-library/user-event';

import { episodeData } from './episodeData';

import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');

test('renders without errors', async ()=>{
    mockFetchShow.mockResolvedValueOnce(episodeData);

    render(<App/>);

    await wait(() => {
        const name = screen.getByText(/stranger things/i);
        expect(name).toBeInTheDocument();
    });
});

test('fetches and renders show data', async () => {

    mockFetchShow.mockResolvedValueOnce(episodeData);

    render(<App/>);

    render(<Episodes episodes={episodeData.data._embedded.episodes} />);

    await wait(() => {
        const episodes = screen.getAllByTestId("episode");
        
        expect(episodes).toHaveLength(3);
    });
});

