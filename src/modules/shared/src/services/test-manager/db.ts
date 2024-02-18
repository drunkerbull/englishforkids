import { StepType, TaskType } from './test-manager.enum';
import { DB } from './test-manager.interface';

const dbApp: DB = {
  steps: [
    {
      id: 0,
      name: 'Lesson 1',
      type: 'lesson' as StepType,
      desc: 'Watch video and answer the question',
      words: [
        { text: 'School', translate: 'Szkoła' },
        { text: 'Hospital', translate: 'Szpitał' },
        { text: 'Cafeteria', translate: 'Stołówka' },
        { text: 'Gym', translate: 'Siłownia' },
      ],
      tasks: [
        {
          type: 'video' as TaskType,
          url: 'assets/cut_school.mp4',
          subtitles: {
            0: {
              start: 0,
              end: 3,
              text: 'This is my school',
            },
            3: {
              start: 3,
              end: 6,
              text: 'There are a gym, an art room, a music room,',
            },
            8: {
              start: 8,
              end: 14,
              text: "a science room, a nurce's office, a cafeteria,",
            },
            14: {
              start: 14,
              end: 15,
              text: 'and many classrooms.',
            },
            17: {
              start: 17,
              end: 21,
              text: 'School',
            },
          },
          question: {
            title: 'What location is this video clip talking about?',
            answers: [
              { text: 'School', isRight: true },
              { text: 'Hospital', isRight: false },
              { text: 'Office', isRight: false },
            ],
          },
        },
        {
          type: 'video' as TaskType,
          url: 'assets/cut_cafeteria.mp4',
          subtitles: {
            0: {
              start: 0,
              end: 2,
              text: 'We have lunch',
            },
            2: {
              start: 2,
              end: 5,
              text: 'in the cafeteria.',
            },
            5: {
              start: 5,
              end: 10,
              text: 'Cafeteria',
            },
          },
          question: {
            title: 'What location is this video clip talking about?',
            answers: [
              { text: 'Gym', isRight: false },
              { text: 'Cafeteria', isRight: true },
              { text: 'Music room', isRight: false },
            ],
          },
        },
      ],
    },
    {
      id: 1,
      name: 'Lesson 2',
      type: 'lesson' as StepType,
      desc: 'Listen to the audio clip and answer the question',
      words: [
        { text: 'Classroom', translate: 'Klasa' },
        { text: 'Music room', translate: 'Pokój muzyczny' },
        { text: "Nurse's office", translate: 'Pokój pielęgniarki' },
      ],
      tasks: [
        {
          type: 'audio' as TaskType,
          url: 'assets/cut_classroom_audio.mp3',
          subtitles: {
            0: {
              start: 0,
              end: 3,
              text: 'This is our classroom.',
            },
            4: {
              start: 4,
              end: 6,
              text: 'We study together here.',
            },
            7: {
              start: 7,
              end: 10,
              text: 'There are a black board, chalks,',
            },
            10: {
              start: 10,
              end: 13,
              text: 'desks, chairs, and a bulletion board.',
            },
            15: {
              start: 15,
              end: 20,
              text: 'Classroom',
            },
          },
          question: {
            title: 'What location is this audio clip talking about?',
            answers: [
              { text: 'Gym', isRight: false },
              { text: 'Classroom', isRight: true },
              { text: 'Cafeteria', isRight: false },
            ],
          },
        },
        {
          type: 'audio' as TaskType,
          url: 'assets/cut_music_room_audio.mp3',
          subtitles: {
            0: {
              start: 0,
              end: 3,
              text: 'We have music class',
            },
            3: {
              start: 3,
              end: 6,
              text: 'in the music room.',
            },
            5: {
              start: 5,
              end: 13,
              text: 'Music room',
            },
          },
          question: {
            title: 'What location is this audio clip talking about?',
            answers: [
              { text: 'Science room', isRight: false },
              { text: 'Music room', isRight: true },
              { text: 'Art room', isRight: false },
            ],
          },
        },
        {
          type: 'audio' as TaskType,
          url: 'assets/cut_nurses_office_audio.mp3',
          subtitles: {
            0: {
              start: 0,
              end: 3,
              text: 'When you feel sick,',
            },
            3: {
              start: 3,
              end: 6,
              text: "you can rest in the nurse's office.",
            },
            7: {
              start: 7,
              end: 13,
              text: "Nurse's office",
            },
          },
          question: {
            title: 'What location is this audio clip talking about?',
            answers: [
              { text: "Nurse's office", isRight: true },
              { text: 'Art room', isRight: false },
              { text: 'Classroom', isRight: false },
            ],
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Exam 1',
      type: 'exam' as StepType,
      desc: 'This is Exam!',
    },
    {
      id: 3,
      name: 'Lesson 3',
      type: 'lesson' as StepType,
      desc: 'Comming soon',
      tasks: [],
      words: [],
    },
  ],
};
export default dbApp;
