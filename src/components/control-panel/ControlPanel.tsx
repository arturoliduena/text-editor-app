import React, { ChangeEvent } from 'react';
import './ControlPanel.css';
import { connect } from 'react-redux'
import { applyBold, applyItalic, applyUnderline, changeWord } from '../../store/actions/text';
import { searchSynonymsRequest } from '../../store/actions/wordFinding';
import { ITextState } from '../../constants/textTypes';
import { Isynonyms } from '../../constants/synonymsTypes';
import { AppState } from '../../store/reducers';

const mapStateToProps = (state: AppState) => ({
  text: state.text,
  synonyms: state.wordFinding.synonyms
})

const dispatchProps = {
  applyBold,
  applyItalic,
  applyUnderline,
  searchSynonymsRequest,
  changeWord,
};

interface Props {
  text: ITextState,
  synonyms: Isynonyms,
  applyBold: () => void,
  applyItalic: () => void,
  applyUnderline: () => void,
  searchSynonymsRequest: (text: string) => void,
  changeWord: (newWord: string) => void,
}


const ControlPanel: React.FC<Props> = props => {
  const handleOnchange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;
    props.changeWord(value)
  }

  return (
    <div id="control-panel">
      <div id="format-actions">
        <button className="button" type="button" onClick={props.applyBold}><b>B</b></button>
        <button className="button" type="button" onClick={props.applyItalic}><i>I</i></button>
        <button className="button" type="button" onClick={props.applyUnderline}><u>U</u></button>
        <button className="button" type="button" onClick={() => props.searchSynonymsRequest(props.text.selectedText)}>Search Synonym</button>
        {
          props.synonyms.length ? 
          <select className="button" name="synonym" form="synonymsform" onChange={handleOnchange}>
            <option value={props.text.selectedText}> {props.text.selectedText} </option>
            {
              props.synonyms.map((elem, i) => <option key={i} value={elem.word}> {elem.word} </option>)
            }
          </select> : null
        }
      </div>
    </div>
  );
}

export default connect(mapStateToProps, dispatchProps)(ControlPanel);