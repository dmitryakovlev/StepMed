export interface IStaff {
  id: number;
  photoUrl: string;
  fullName: string;
  workPosition: string;
  description: string;
  education: string[];
  professionalCommunity?: string[];
  advancedTraining?: string[];
  publications?: string[];
  social: {
    facebook?: string;
    vk?: string;
    linkedIn?: string;
    whatsapp?: string;
  };
}

export const staffDoctors: IStaff[] = [
  {
    id: 0,
    photoUrl: '/images/staff/yulia.png',
    fullName: 'Юлия Александровна Гронская',
    workPosition: 'онколог-химиотерапевт',
    description:
      'Не следует, однако, забывать, что консультация с широким активом требует определения и уточнения анализа существующих паттернов поведения. В частности, сложившаяся структура организации прекрасно подходит для реализации вывода текущих активов! Современные технологии достигли такого уровня, что семантический разбор внешних противодействий способствует повышению качества новых принципов формирования материально-технической и кадровой базы!',
    education: ['ПСПБГМУ им. ак. Павлова И.П.', 'ПСПБГМУ им. ак. Павлова И.П.'],
    professionalCommunity: ['yuri.jpg'],
    advancedTraining: [],
    publications: [],
    social: {
      facebook: 'yulia',
      vk: 'yulia',
      linkedIn: 'yulia',
      whatsapp: 'https://yulia.com',
    },
  },
];
