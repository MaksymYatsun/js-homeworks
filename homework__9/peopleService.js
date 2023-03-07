"use strict"

function peopleService(people) {
  const { headers, parsed } = parse(people);

  function parse(people) {
    const rows = people.split('\n');
    const headers = rows[0].split(',');

    const parsed = rows.slice(1).map(row => {
      const values = row.split(',');

      return headers.reduce((obj, key, index) => {
        if (key.endsWith('At')) {
          obj[key] = new Date(values[index] * 1000);

          return obj;
        }
        obj[key] = values[index];

        return obj;
      }, {});
    });

    return { headers, parsed };
  }

  const printSignUps = () => {
    const currentDate = new Date();
    const signUps = parsed.map(person => {
      const bornAt = new Date(currentDate - (person.age * (365 * 24 * 60 * 60 * 1000)));
      const ageAtRegistration = person.registeredAt.getFullYear() - bornAt.getFullYear();

      return `${person.name} was ${ageAtRegistration} years old when they signed up`;
    });

    return signUps.join('\n');
  }

  const printSignUpDates = () => {
    const currentYear = new Date().getFullYear();

    const signUpDates = parsed.map(person => {
      const registrationYear = person.registeredAt.getFullYear();

      if (registrationYear - currentYear === 0) {
        return `${person.name} signed up this year`;
      }

      if ((registrationYear - currentYear) * -1 === 1) {
        return `${person.name} signed up ${Math.abs(registrationYear - currentYear)} year ago`;
      }

      return `${person.name} signed up ${Math.abs(registrationYear - currentYear)} years ago`;
    });

    return signUpDates.join('\n');
  }

  const printSignUpStats = () => {
    const signUpStats = { bussinesDay: 0, weekend: 0 };

    parsed.map(person => {
      if (person.registeredAt.getDay() >= 1 && person.registeredAt.getDay() <= 5) {
        return signUpStats.bussinesDay += 1;
      }

      return signUpStats.weekend += 1;
    })

    return signUpStats;
  }

  const printTeenagers = () => {
    const currentYear = new Date().getFullYear();
    const teenagers = parsed.filter(person => {
      return person.age < 18;
    });

    const result = teenagers.map(person => {
      const birthYear = new Date(currentYear - person.age);
      const yearsUntilAdulthood = 18 - (currentYear - birthYear);

      return `${person.name} will be 18 in ${currentYear + yearsUntilAdulthood}`;
    });

    return result.join('\n');
  }

  return { printSignUps, printSignUpDates, printSignUpStats, printTeenagers };
}

const people = `name,age,city,job,registeredAt
Emma,28,Paris,Marketing Manager,1257888000
David,19,Madrid,Graphic Designer,1431532800
Samantha,33,Berlin,Data Analyst,1356998400
Adam,22,Lisbon,Web Developer,1309478400
Emily,26,Barcelona,Accountant,1338508800
Oliver,30,Milan,Software Engineer,1293868800
Lucas,24,Brussels,Sales Representative,1483593600
Isabella,27,Rome,Product Manager,1314835200
Daniel,29,Stockholm,UX Designer,1476739200
Sophia,23,Amsterdam,Customer Service Representative,1388534400
Matthew,20,Vienna,IT Support Specialist,1293868800
Mia,35,Prague,Marketing Specialist,1262304000
Jackson,25,Copenhagen,Operations Manager,1293868800
Ava,31,Dublin,HR Manager,1473158400
Liam,18,Helsinki,Junior Developer,1325376000
Harper,34,Oslo,Finance Manager,1398902400
Noah,16,Athens,Content Writer,1427846400
Ella,36,Budapest,Project Manager,1478198400
Lucy,17,Reykjavik,Intern,1427846400
Aiden,37,Edinburgh,Business Analyst,1293868800
Chloe,38,Warsaw,Technical Writer,1270080000
Caden,39,Munich,Data Scientist,1479014400
Zoe,40,Manchester,SEO Specialist,1479326400
Carter,21,Bucharest,Account Manager,1293868800
Madison,41,Sofia,Web Designer,1447478400
Grayson,42,Paris,Marketing Analyst,1362096000
Hannah,43,Moscow,Product Designer,1391212800
Mason,44,Stockholm,Front-end Developer,1405296000
Lily,45,Brussels,Customer Support Specialist,1405296000
Ethan,46,Madrid,Software Developer,1405296000
Layla,47,Lisbon,UI Designer,1388534400
Logan,48,Barcelona,Operations Specialist,1293868800
Aria,49,Milan,Quality Assurance Analyst,1338508800
Jacob,50,Berlin,Database Administrator,1405296000
Avery,29,London,Web Developer,1476739200
Benjamin,32,Lisbon,Software Engineer,1338508800
Charlotte,28,Paris,Marketing Manager,1478198400
Dylan,26,Berlin,Data Analyst,1438828800
Evelyn,30,Milan,Software Engineer,1438828800
Faith,31,Dublin,HR Manager,1309478400
Grace,23,Amsterdam,Customer Service Representative,1473878400
Henry,24,Brussels,Sales Representative,1362096000
Isabelle,27,Rome,Product Manager,1419984000
Jack,19,Madrid,Graphic Designer,1479326400
Kennedy,25,Copenhagen,Operations Manager,1362096000
Leah,33,Berlin,Data Analyst,1447478400`

const { printSignUps, printSignUpDates, printSignUpStats, printTeenagers } = peopleService(people);

console.log(printSignUps());
console.log(printSignUpDates());
console.log(printSignUpStats());
console.log(printTeenagers());
