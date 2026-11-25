const ENTRY_TEXT =
  "Ctrl-Z-as-a-Service: for $200/month we keep one human on call who reads your AI agent's plan and says 'no' before it runs. Already profitable.";

const USAGE = "Usage: node main.ts [--help]";

type ParseResult =
  | { ok: true; help: boolean }
  | { ok: false; error: string };

function parseArgs(args: string[]): ParseResult {
  let help = false;

  for (const arg of args) {
    if (arg === "--help") {
      help = true;
    } else {
      return { ok: false, error: `Unknown argument: ${arg}` };
    }
  }

  return { ok: true, help };
}

const parsed = parseArgs(process.argv.slice(2));

if (!parsed.ok) {
  console.error(`${parsed.error}\n${USAGE}`);
  process.exit(1);
}

if (parsed.help) {
  console.error(USAGE);
  process.exit(0);
}

console.log(ENTRY_TEXT);
