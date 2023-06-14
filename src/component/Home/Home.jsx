import React, { useContext } from 'react';
import TopSlider from './TopSlider';
import ExtraSection from './ExtraSection';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import { AuthContext } from '../../Providers/AuthProviders';
import './Home.css'

const Home = () => {
    const { darkLightTheme } = useContext(AuthContext);
    return (
        <div className={`home-page ${darkLightTheme ? 'dark' : 'light'}`}>
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;