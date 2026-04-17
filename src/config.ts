export const CRATE_NAME = `vexide`;

export const GITHUB_ORG_URL = `https://github.com/vexide`;
export const GITHUB_REPO_URL = `${GITHUB_ORG_URL}/vexide`;

export const DISCORD_INVITE_CODE = `d4uazRf2Nh`;
export const DISCORD_INVITE_URL = `https://discord.gg/d4uazRf2Nh`;

export interface Example {
	name: string;
	code: string;
}

export const EXAMPLES: Example[] = [
	{
		name: "Basic",
		code: `#[vexide::main]
async fn main(peripherals: Peripherals) {
	// Create a green motor on port 1.
	let mut my_motor = Motor::new(
		peripherals.port_1,
		Gearset::Green,
		Direction::Forward,
	);

	// Spin the motor at 10 volts!
	_ = my_motor.set_voltage(10.0);
}`,
	},
];

export const DOCS_SIDEBAR = {
	"01. Getting Started": [
		"index",
		"prerequisites",
		"program-structure",
		"building-uploading",
		"using-the-terminal",
		"competition",
	],
	"02. Devices": [
		"peripherals",
		"motor",
		"controller",
		"inertial-sensor",
		"rotation-sensor",
		"distance-sensor",
		"optical-sensor",
	],
	"03. Multitasking": [
		"async-introduction",
	],
	"04. Specific Topics": [
		"abort",
		"features",
	],
	"05. C++ Stuffs": [
		"basic-syntax",
		"classes",

	]
};

export const PROGRAMMING_SIDEBAR = {
	"Getting Started": [
		{
			title: "New Project",
			children: [
				"getting-started/creating-a-new-pros-project",
				"getting-started/essence-of-programming", 
				"getting-started/how-fix-clang", 
				"getting-started/installing-an-ide", 				 
				"getting-started/using-source-control", 
			]
		}
	], 
	
	"Writing Code": [
		{
			title: "Creating Files",
			children: [
				"cpp-tutorials/creating-new-files/header-files",
				"cpp-tutorials/creating-new-files/source-files",
			]
		},	
		{
			title: "C++ Tutorials",
			children: [
				"cpp-tutorials/basic-cpp-syntax",
				"cpp-tutorials/comments",
				"cpp-tutorials/how-cpp-works",
				"cpp-tutorials/installing-cpp",
				"cpp-tutorials/variables",
				"cpp-tutorials/print-statements",
				"cpp-tutorials/conditional-statements",
				"cpp-tutorials/loops",
				"cpp-tutorials/functions",
				"cpp-tutorials/vectors-and-arrays",
				"cpp-tutorials/namespaces",
				"cpp-tutorials/pointing",
				"cpp-tutorials/classes",
			]
		},	
	],
	"Pros Specific": [
		{
			title: "Multi-threading",
			children: [
				"pros-specific/threading",
			]	
		},	
	],
	"Control Theory": [
		{
			title: "Feedback Controllers",
			children: [
				"control-theory-for-vex/feedback-controllers/feedback-controller",
				"control-theory-for-vex/feedback-controllers/pid-controller",
			],
		},
		{
			title: "Localization Methods",
			children: [
				"control-theory-for-vex/localization/odometry",
				"control-theory-for-vex/localization/monte-carlo-localization",
				"control-theory-for-vex/localization/kalman-filtering",
				"control-theory-for-vex/localization/vision-odometry",
			]
		},
		{
			title: "Path Following",
			children: [
				"control-theory-for-vex/path-following/pure-pursuit",
				"control-theory-for-vex/path-following/ramsette",
			]
		},
	],
	"Resorce Bank": 
	[
		{
			title: "Visual Media",
			children: [
				"random-club-resources/math-youtube",				
			]
		},
		{
			title: "Graphs",
			children: [
				"random-club-resources/desmos",
			]
		},
	],
}