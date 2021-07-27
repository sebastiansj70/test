import './styles.css';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { AppBar, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { ContentAppBar } from './styles';
import { PlayingField } from '../../models/PlayingField';
import { PlayingFieldForm } from '../../components/PlayingFieldFrom';
import { PlayingFieldList } from '../../components/PlayingFieldList';

interface PlayingListoManagmentProps {
    playingFieldLists: Array<PlayingField>;
    playingField: PlayingField;
    addPlatingField: (playingField: PlayingField) => void;
    playingFieldList: () => void;
    updatePlayingField: (idplayingField: number, playingField: PlayingField) => void;
    savePalyingField: (playingField: PlayingField) => void;
}

export const PlayingListoManagment: React.FC<PlayingListoManagmentProps> = ({
    playingFieldLists,
    playingField,
    addPlatingField,
    playingFieldList,
    updatePlayingField,
    savePalyingField
}) => {

    const [tabPlayingField, setTabPlayingField] = useState('2');

    useEffect(() => {
        playingFieldList();
    }, [playingFieldList]);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTabPlayingField(newValue);
    };

    const handleListTicket = () => {
        setTabPlayingField('1');
    };

    return (
        <ContentAppBar>
            <TabContext value={tabPlayingField} >
                <AppBar position='relative' className='appbar'>
                    <TabList className='tablis' onChange={handleChange} aria-label="simple tabs example">
                        <Tab className='tab' label="Nueva" value="2" />
                        <Tab className='tab' label="Campos de juego" value="1" />
                    </TabList>
                </AppBar >
                <TabPanel value='1'>
                    <PlayingFieldList
                        playingField={playingField}
                        playingFieldLists={playingFieldLists}
                        updatePlayingField={updatePlayingField}
                        savePalyingField={savePalyingField}
                    />
                </TabPanel>
                <TabPanel value='2'>
                    <PlayingFieldForm
                        onSubmit={addPlatingField}
                        formTitle='Crear campo de juego'
                        handleListTicket={handleListTicket}
                    />
                </TabPanel>
            </TabContext>
        </ContentAppBar>
    );
};

PlayingListoManagment.propTypes = {
    playingFieldLists: PropTypes.array.isRequired,
    addPlatingField: PropTypes.func.isRequired,
    playingFieldList: PropTypes.func.isRequired,
    updatePlayingField: PropTypes.func.isRequired,
    savePalyingField: PropTypes.func.isRequired,
    playingField: PropTypes.shape({
        idCancha: PropTypes.number.isRequired,
        statusCancha: PropTypes.string.isRequired,
    }).isRequired
};
