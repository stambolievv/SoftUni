import { html, nothing } from '../lib/lib.js';

export const template = (student) => html`
    <tr class=${student.match ? 'select' : nothing}>
        <td>${student.item.firstName} ${student.item.lastName}</td>
        <td>${student.item.email}</td>
        <td>${student.item.course}</td>
    </tr>
`;