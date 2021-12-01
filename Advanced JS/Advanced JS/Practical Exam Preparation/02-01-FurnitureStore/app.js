window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const totalPrice = document.getElementsByClassName('total-price')[0];
    document.getElementsByClassName('store')[0].addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName == 'BUTTON' && e.target.id == 'add') {
            if (model.value && (year.value && !isNaN(year.value) && year.value > 0) && description.value && (price.value && !isNaN(price.value) && price.value > 0)) {
                const table = elem('tr', { className: 'info' },
                    elem('td', {}, model.value),
                    elem('td', {}, Number(price.value).toFixed(2)),
                    elem('td', {},
                        elem('button', { className: 'moreBtn' }, 'More Info'),
                        elem('button', { className: 'buyBtn' }, 'Buy it')
                    )
                );
                const hideTable = elem('tr', { className: 'hide' },
                    elem('td', {}, `Year: ${year.value}`),
                    elem('td', { colSpan: 3 }, `Description: ${description.value}`)
                );
                document.getElementById('furniture-list').appendChild(table);
                document.getElementById('furniture-list').appendChild(hideTable);
                model.value = '';
                year.value = '';
                description.value = '';
                price.value = '';
            }
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'moreBtn') {
            const moreInfo = e.target.parentElement.parentElement.nextElementSibling;
            if (e.target.textContent == 'More Info') {
                moreInfo.style.display = 'contents';
                e.target.textContent = 'Less Info';
            } else {
                moreInfo.style.display = 'none';
                e.target.textContent = 'More Info';
            }
        } else if (e.target.tagName == 'BUTTON' && e.target.className == 'buyBtn') {
            const tr = e.target.parentElement.parentElement;
            const trHide = tr.nextElementSibling;
            const price = Number(tr.children[1].textContent);
            totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);
            tr.remove();
            trHide.remove();
        }
    });

    function elem(type, props, ...content) {
        const element = document.createElement(type);
        for (const prop in props) {
            element[prop] = props[prop];
        }
        for (let entry of content) {
            if (typeof entry == 'string' || typeof entry == 'number') {
                entry = document.createTextNode(entry);
            }
            element.appendChild(entry);
        }
        return element;
    }
}



{/* <td>Chair</td><td>48</td><td><buttonclass="moreBtn">MoreInfo</button><buttonclass="buyBtn">Buyit</button></td> */ }
{/* <td>Chair</td><td>48.00</td><td><buttonclass="moreBtn">MoreInfo</button><buttonclass="buyBtn">Buyit</button></td> */ }

// <trclass="info"><td>Chair</td><td>48.00</td><td><buttonclass="moreBtn">LessInfo</button><buttonclass="buyBtn">Buyit</button></td></tr><trclass="hide"style="display:contents;"><td>Year:2016</td><td>Description:Comfortableforyouandyourpet!</td></tr>
// <trclass="info"><td>Chair</td><td>48.00</td><td><buttonclass="moreBtn">LessInfo</button><buttonclass="buyBtn">Buyit</button></td></tr><trclass="hide"style="display:contents;"><td>Year:2016</td><tdcolspan="3">Description:Comfortableforyouandyourpet!</td></tr>