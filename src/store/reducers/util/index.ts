import { content, FormatTypes } from '../../../constants/textTypes';

export const createContent = (text: string, separator: string): content[] => {
  return text.split(separator)
    .map(elem => ({
        text: elem
      })
    )
}

export const applyFormat = (content: content[], index: number | null, format: FormatTypes) => {
  if(index){
    switch (format) {
      case FormatTypes.BOLD:
        content[index].isBold = !content[index].isBold
        break;
      case FormatTypes.ITALIC:
        content[index].isItalic = !content[index].isItalic
        break;
      case FormatTypes.UNDERLINE:
        content[index].isUnderline = !content[index].isUnderline
        break;
      default:
        break;
    }
  }
  return content
}

export const changeWord = (content: content[], index: number | null, newWord: string) => {
  if(index){
    content[index].text = newWord
  }
  return content
}