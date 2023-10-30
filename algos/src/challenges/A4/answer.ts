/**
 * In this challenge, you have to regroup ads by the month they got created.
 * The result should be an array containing one object for each month. These objects
 * must be sorted chronoligically (oldest first) based on their month property (ISO8601 datetime).
 * Please note that the date of a month will be the first day of this month at midnigth (ISO8601)
 * For instance, the datetime of novembre is: "2023-11-01T00:00:00.000Z"
 *
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ...
 * instead of setHouts, setMinutes, ... to avoid timezone offsets!
 *
 * Example:
 * Input: [
 *      { title: "Vélo de course", createdAt: "2023-11-17T11:45:01.721Z" },
 *      { title: "Robot mélangeur", createdAt: "2023-03-12T13:45:01.721Z" },
 *      { title: "Vélo de ville", createdAt: "2023-03-10T07:45:47.721Z" },
 *      { title: "Chaussures (41)", createdAt: "2023-01-21T21:25:47.721Z" },
 *      { title: "Tapis", createdAt: "2023-06-16T21:25:47.721Z" },
 * ]
 * Output: [
 *      {
 *          month: "2023-01-01T00:00:00.000Z",
 *          submissions: [
 *              { title: "Quest Angular", createdAt: "2023-01-21T21:25:47.721Z" }
 *          ]
 *      },
 *      {
 *          month: "2023-03-01T00:00:00.000Z",
 *          submissions: [
 *              { title: "Quest GraphQL", createdAt: "2023-03-12T13:45:01.721Z" },
 *              { title: "Quest ReactJS", createdAt: "2023-03-10T07:45:47.721Z" },
 *          ]
 *      },
 *      {
 *          month: "2023-06-01T00:00:00.000Z",
 *          submissions: [
 *              { title: "Quest MySQL", createdAt: "2023-06-16T21:25:47.721Z" },
 *          ]
 *      },
 *      {
 *          month: "2023-11-01T00:00:00.000Z",
 *          submissions: [
 *              { title: "Quest NodeJS", createdAt: "2023-11-17T11:45:01.721Z" },
 *          ]
 *      },
 * ]
 *
 * @param submissions A list of ads with their title and created datetime
 * @returns A list of objects. Each object must contain a month and its associated ads. The list must be sorted chronoligically
 */

// ↓ uncomment bellow lines and add your response!
/* 
export default function ({ ads }: { ads: Ad[] }): MonthAds[] {
  return [];
}
 */

// used interfaces, do not touch
export interface Ad {
  title: string;
  createdAt: string;
}

export interface MonthAds {
  month: string;
  ads: Ad[];
}
