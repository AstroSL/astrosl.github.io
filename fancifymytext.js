<!DOCTYPE html>
<html>
	<head>
		<title>Fancify Shamcify</title>

		<!-- link to your script file here -->
		<script type"text/javascript" src="fancifymytext.js"></script>
        <!--<script> alert("Hello, world!")</script>-->
	</head>

	<body>
		<h1>Fancify my Text</h1>
		<!-- Your UI controls go here -->
        <!--Field Box 1-->
		<form>
            <fieldset>
                <legend>Text</legend>
			    <label for="Input"><!--Text--></label>
			    <textarea id="feedme" type="text" rows="4" cols="30" wrap="hard" ></textarea>
            </fieldset>
		</form>
        <!--Field Box 2-->
        <form>
            <fieldset>
                <legend>Fancify</legend>
                <label for="Buttons"><!--Fancify--></label>
                <button type ="button" value="Bigger!" onclick="big()">Bigger!</button>
                <input type="radio" name="FancyShmancy" value="FancyShmancy" onchange="bold()"> FancyShmancy
                <input type="radio" name="BoringBetty" value="BoringBetty" onchange="bbetty()"> BoringBetty
                <button type="button" name="Moo" value="moo" onclick="moo()">Moo</button>
            </fieldset>  
        </form>

	</body>

    </html>