import { PlayingFieldRepository } from './playingField.repository'
import { PlayingField } from "../../feature/playingField/models/PlayingField";

describe('testing repository playing field', () => {

    const arrayPlayingField = {
        "idCancha": 1,
        "statusCancha": "Malo"
    }

    it('testing consultplayingField', async () => {
        const playingFieldList = await PlayingFieldRepository.consultplayingField()
        // expect(playingFieldList.data).toContain([{}])
    })
});
