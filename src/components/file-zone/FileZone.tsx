import React, { MouseEvent, useRef } from 'react';
import './FileZone.css';
import { connect } from 'react-redux'
import { selectWord, deselectWord } from '../../store/actions/text';
import { cleanSynonyms } from '../../store/actions/wordFinding';
import { ITextState, content } from '../../constants/textTypes';
import { AppState } from '../../store/reducers';

const mapStateToProps = (state: AppState) => ({
  text: state.text,
})

const dispatchProps = {
  selectWord,
  deselectWord,
  cleanSynonyms,
};

interface Props {
  content: content[],
  text: ITextState,
  selectWord: (position: number, selectedText: string) => void,
  deselectWord: () => void,
  cleanSynonyms: () => void,
}

const FileZone: React.FC<Props> = props => {
  const textArea = useRef<HTMLDivElement>(null);

  const onmouseup = (event: MouseEvent<HTMLDivElement>) => {
    const selObj = (window as any).getSelection();
    const type = selObj.type
    if(type === 'Caret'){
      props.deselectWord();
    }
    props.cleanSynonyms();
  }

  const handleDoubleClick = (event: MouseEvent<HTMLDivElement>, index: number) => {
    const selObj = (window as any).getSelection();
    const selectedText = selObj.toString();
    props.selectWord(index, selectedText);
  }
  
  const convertContentToHTML = (content: content[]) => {
    return content.map((elem, index) => {
      let classesToAplly = '';
      if(elem.isBold){
        classesToAplly = classesToAplly.concat('bold')
      }
      if(elem.isItalic){
        classesToAplly = classesToAplly.concat(' italic')        
      }
      if(elem.isUnderline){
        classesToAplly = classesToAplly.concat(' underline')        
      }
      return <span 
        key={index}
        className={classesToAplly} 
        onDoubleClick={(e: MouseEvent<HTMLDivElement>) => handleDoubleClick(e, index)}> {elem.text} </span>
    })
  }

  return (
    <div id="file-zone">
      <div id="file" ref={textArea} onMouseUp={onmouseup}>
        {convertContentToHTML(props.content)}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, dispatchProps)(FileZone);