import { render } from './lib/lib.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showUpdate } from './views/update.js';

const root = document.body;

const ctx = { update };

function update() {
   render([
      showCatalog(ctx),
      showCreate(ctx),
      showUpdate(ctx)
   ], root);
}

update();