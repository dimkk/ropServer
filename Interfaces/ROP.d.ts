declare module ROP {
    export interface IXmlTranslation{
        translation: IXmlTranslationText
    }
    export interface IXmlTranslationText{
        text: IXmlTranslationTextString[]
    }
    export interface IXmlTranslationTextString{
        _:string;
        $:IXmlTranslationTextStringsTime
    }
    export interface IXmlTranslationTextStringsTime{
        start:number,
        dur:number
    }
}