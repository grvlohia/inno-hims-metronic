import AbstractDBModel from "../../../shared/model/AbstractDBModel";
import ContactInformation from "../../../shared/model/ContactInformation";
import Name from "../../../shared/model/Name";

export default interface Patient extends AbstractDBModel, Name, ContactInformation {
    code: string
    sex: string
    dateOfBirth: string
    
}