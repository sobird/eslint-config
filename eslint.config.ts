// https://eslint.org/docs/latest/use/configure/configuration-files

import eslint from "@eslint/js";
import { defineConfig } from 'eslint/config';
import { sobird } from "./src";
import tseslint from 'typescript-eslint';


export default sobird();
