import { PropTypes } from 'prop-types';
import {
  SectionList,
  SectionLi,
  ContactTitle,
  ContactTel,
  ContactButton,
} from './ContactList.styled';

export const ContactList = ({ requiredCard, deliteContact }) => {
  return (
    <SectionList>
      {requiredCard.map(({ id, name, number }) => {
        return (
          <SectionLi key={id}>
            <ContactTitle> {name} </ContactTitle>
            <ContactTel href="tel {number}">{number}</ContactTel>
            <ContactButton type="button" onClick={() => deliteContact(id)}>
              Delite
            </ContactButton>
          </SectionLi>
        );
      })}
    </SectionList>
  );
};

ContactList.propTypes = {
  requiredCard: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
