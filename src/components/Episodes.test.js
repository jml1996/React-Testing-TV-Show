import React from 'react';
import { getAllByTestId, render, screen, wait } from "@testing-library/react";
import App from './../App';
// import Dropdown from 'react-dropdown';
import Episodes from './Episodes';
import userEvent from '@testing-library/user-event';

import { episodeData } from './../episodeData';

test('renders without errors', ()=>{
    render(<Episodes episodes={episodeData.data._embedded.episodes} />);

    const episodesDiv = screen.getByTestId("episodes");
    expect(episodesDiv).toBeInTheDocument();
});

test('renders correct number of episodes', ()=>{
    render(<Episodes episodes={episodeData.data._embedded.episodes} />);
    
    const episodeDivs = screen.getAllByTestId("episode");
    expect(episodeDivs).toHaveLength(3);
});

test('episodes are labelled correctly', ()=>{
    render(<Episodes episodes={episodeData.data._embedded.episodes} />);
    
    const chapterOne = screen.getByText(/chapter one/i);
    const chapterTwo = screen.getByText(/chapter two/i);
    const chapterThree = screen.getByText(/chapter three/i);

    expect(chapterOne).toBeInTheDocument();
    expect(chapterTwo).toBeInTheDocument();
    expect(chapterThree).toBeInTheDocument();


    const seasonOne = screen.getByText(/season 1/i);
    const seasonTwo = screen.getByText(/season 2/i);
    const seasonThree = screen.getByText(/season 3/i);

    expect(seasonOne).toBeInTheDocument();
    expect(seasonTwo).toBeInTheDocument();
    expect(seasonThree).toBeInTheDocument();
});