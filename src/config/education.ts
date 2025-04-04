
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Duke University',
      major: 'MQM: Risk Management',
      logo: 'college',
      start: '2024',
      end: '2025'
    },
    {
      school: 'New York University',
      major: 'Computer Science',
      logo: 'college',
      start: '2018',
      end: '2021'
    },
    {
      school: 'NFLS',
      major: 'International Baccalaureate',
      logo: 'college',
      start: '2014',
      end: '2017'
    },
  ]