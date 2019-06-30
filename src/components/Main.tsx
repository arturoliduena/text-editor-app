import React from 'react';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";

import { connect } from 'react-redux'
import { getText } from '../store/actions/text';
import { ITextState } from '../constants/textTypes';
import { IWordFindingState, Isynonyms } from '../constants/synonymsTypes';
import { AppState } from '../store/reducers';

const mapStateToProps = (state: AppState) => ({
  text: state.text,
  wordFinding: state.wordFinding,
  synonyms: state.wordFinding.synonyms
})

const dispatchProps = {
  getText,
};

interface AppProps {
  text: ITextState,
  synonyms: Isynonyms,
  wordFinding: IWordFindingState
  getText: () => void,
}

class Main extends React.Component<AppProps> {

  componentDidMount(){
    this.props.getText();
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel/>
          <FileZone content={this.props.text.content} />
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchProps)(Main);
