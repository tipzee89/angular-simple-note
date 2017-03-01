import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let notes = [
      { id: 1, title: 'Apple', content: 'Apple is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services. '},
      { id: 2, title: 'Alphabet Inc.', content: 'Alphabet Inc. is an American multinational conglomerate founded on October 2, 2015, by the two founders of Google, Larry Page and Sergey Brin'},
      { id: 3, title: 'Samsung Group', content: 'Samsung Group is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol.'},
      { id: 4, title: 'Facebook', content: 'Facebook is an American for-profit corporation and online social media and social networking service based in Menlo Park, California.'}
    ];
    return {notes};
  }
}