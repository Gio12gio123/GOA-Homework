

public class DayOfWeek {
    public static void main(String[] args) {
        int day = 3; // Change this value to test different days

        if (day == 1) {
            System.out.println("ორშაბათი");
        } else if (day == 2) {
            System.out.println("სამშაბათი");
        } else if (day == 3) {
            System.out.println("ოთხშაბათი");
        } else if (day == 4) {
            System.out.println("ხუთშაბათი");
        } else if (day == 5) {
            System.out.println("პარასკევი");
        } else if (day == 6) {
            System.out.println("შაბათი");
        } else if (day == 7) {
            System.out.println("კვირა");
        } else {
            System.out.println("არასწორი დღე");
        }
    }
}



 class EvenOdd {
    static void main(String[] args) {
       int number = 10; // Change this value to test different numbers
       if (number % 2 == 0) {
           System.out.println(number + " is an even number.");
       } else {
           System.out.println(number + " is an odd number.");
       }
   

}

import java.util.Scanner;

public class WeatherForecast {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("შეიყვანეთ რიცხვი (1-4): ");
        int weather = scanner.nextInt();

        switch (weather) {
            case 1:
                System.out.println("მზიანი");
                break;
            case 2:
                System.out.println("წვიმიანი");
                break;
            case 3:
                System.out.println("მოღრუბლული");
                break;
            case 4:
                System.out.println("ქარიანი");
                break;
            default:
                System.out.println("არ არის დადგენილი");
        }
    }
}

import java.util.Scanner;

public class MonthAndHalf {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("შეიყვანეთ რიცხვი (1-12): ");
        int month = scanner.nextInt();

      
        String monthName = "";
        switch (month) {
            case 1: monthName = "იანვარი"; break;
            case 2: monthName = "თებერვალი"; break;
            case 3: monthName = "მარტი"; break;
            case 4: monthName = "აპრილი"; break;
            case 5: monthName = "მაისი"; break;
            case 6: monthName = "ივნისი"; break;
            case 7: monthName = "ივლისი"; break;
            case 8: monthName = "აგვისტო"; break;
            case 9: monthName = "სექტემბერი"; break;
            case 10: monthName = "ოქტომბერი"; break;
            case 11: monthName = "ნოემბერი"; break;
            case 12: monthName = "დეკემბერი"; break;
            default: monthName = "არასწორი თვე"; break;
        }

        String halfOfYear = (month >= 1 && month <= 6) ? "პირველი ნახევარი" : 
                            (month >= 7 && month <= 12) ? "მეორე ნახევარი" : "არასწორი თვე";

        System.out.println("თვე: " + monthName);
        System.out.println("მეორე ან პირველი ნახევარი: " + halfOfYear);
    }
}





