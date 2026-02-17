import themeColours from '../../utils/colours';

enum Nation {
  England = 'England',
  Russia = 'Russia',
  Italy = 'Italy',
}

export const getNationColour = (nation?: Nation, isEmphasised: boolean = true) => {
  if (!nation) return isEmphasised ? themeColours.unclaimedEmphasised : themeColours.unclaimedStandard;
  return {
    [Nation.England]: isEmphasised ? themeColours.englandEmphasised : themeColours.englandStandard,
    [Nation.Russia]: isEmphasised ? themeColours.russiaEmphasised : themeColours.russiaStandard,
    [Nation.Italy]: isEmphasised ? themeColours.italyEmphasised : themeColours.italyStandard,
  }[nation];
};

export default Nation;
