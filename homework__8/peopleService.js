function peopleService(people) {
  const { headers, parsed } = parse(people);

  function parse(str) {
    const rows = str.split('\n');
    const headers = rows[0].split(',');

    const parsed = rows.slice(1).map(row => {
      const values = row.split(',');
      return headers.reduce((obj, key, index) => {
        obj[key] = values[index];
        return obj;
      }, {});
    });

    return { headers, parsed }
  }

  const filter = (filters) => {
    return parsed.filter(person => {
      for (const [key, value] of Object.entries(filters)) {
        if (person[key] !== value) {
          return false;
        }
      }

      return true;
    });
  }

  const sortBy = (key, order) => {
    const sortedArr = [...parsed];

    sortedArr.sort((a, b) => {
      if (order === 'asc') {
        return a[key] - b[key];
      }

      if (order === 'desc') {
        return b[key] - a[key];
      }

      throw new Error('Unexpected order parameter. Try "asc" or "desc"');
    });

    return sortedArr;
  }

  const getUniqueBy = (key) => {
    const unique = [];
    const uniqueKeys = {};

    for (let i = 0; i < parsed.length; i++) {
      const item = parsed[i];
      if (!uniqueKeys[item[key]]) {
        unique.push(item);
        uniqueKeys[item[key]] = true;
      }
    }

    return unique;
  }

  const stringify = () => {
    let str = '| ';

    for (const header of headers) {
      str += `${header.toUpperCase()} | `;
    }

    str += '\n';

    for (const person of parsed) {
      str += '| ';

      for (const header of headers) {
        str += `${person[header].toUpperCase()} | `;
      }

      str += '\n';
    }

    return str;
  }

  return { filter, sortBy, getUniqueBy, stringify };
}

const people = `name,age,city,job
Emma,28,Paris,Marketing Manager
David,19,Madrid,Graphic Designer
Samantha,33,Berlin,Data Analyst
Adam,22,Lisbon,Web Developer
Emily,26,Barcelona,Accountant
Oliver,30,Milan,Software Engineer
Lucas,24,Brussels,Sales Representative
Isabella,27,Rome,Product Manager
Daniel,29,Stockholm,UX Designer
Sophia,23,Amsterdam,Customer Service Representative
Matthew,20,Vienna,IT Support Specialist
Mia,35,Prague,Marketing Specialist
Jackson,25,Copenhagen,Operations Manager
Ava,31,Dublin,HR Manager
Liam,18,Helsinki,Junior Developer
Harper,34,Oslo,Finance Manager
Noah,16,Athens,Content Writer
Ella,36,Budapest,Project Manager
Lucy,17,Reykjavik,Intern
Aiden,37,Edinburgh,Business Analyst
Chloe,38,Warsaw,Technical Writer
Caden,39,Munich,Data Scientist
Zoe,40,Manchester,SEO Specialist
Carter,21,Bucharest,Account Manager
Madison,41,Sofia,Web Designer
Grayson,42,Paris,Marketing Analyst
Hannah,43,Moscow,Product Designer
Mason,44,Stockholm,Front-end Developer
Lily,45,Brussels,Customer Support Specialist
Ethan,46,Madrid,Software Developer
Layla,47,Lisbon,UI Designer
Logan,48,Barcelona,Operations Specialist
Aria,49,Milan,Quality Assurance Analyst
Jacob,50,Berlin,Database Administrator
Avery,29,London,Web Developer
Benjamin,32,Lisbon,Software Engineer
Charlotte,28,Paris,Marketing Manager
Dylan,26,Berlin,Data Analyst
Evelyn,30,Milan,Software Engineer
Faith,31,Dublin,HR Manager
Grace,23,Amsterdam,Customer Service Representative
Henry,24,Brussels,Sales Representative
Isabelle,27,Rome,Product Manager
Jack,19,Madrid,Graphic Designer
Kennedy,25,Copenhagen,Operations Manager
Leah,33,Berlin,Data Analyst
Mackenzie,21,Bucharest,Account Manager
Natalie,22,Lisbon,Web Developer
Oscar,20,Vienna,IT Support Specialist
Penelope,34,Oslo,Finance Manager
Quinn,18,Helsinki,Junior Developer
Riley,35,Prague,Marketing Specialist
Scarlett,16,Athens,Content Writer
Taylor,36,Budapest,Project Manager
Victoria,37,Edinburgh,Business Analyst
William,28,Milan,Software Engineer
Xavier,38,Warsaw,Technical Writer
Yara,39,Munich,Data Scientist
Zander,40,Manchester,SEO Specialist`

const { filter, sortBy, getUniqueBy, stringify } = peopleService(people);
const filterByAgeAndCity = {
  age: '30',
  city: 'Milan',
}

console.log(stringify(people))