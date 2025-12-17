import java.util.*;
public class SecondLargestInArray {
    public static void main(String[] args) {
        SecondLargestInArray s = new SecondLargestInArray();
        int[] arr = {10, 5, 20, 8};

        System.out.println(s.brute(arr));
        System.out.println(s.optimal(arr));
    }
 
    public int brute(int[] arr) {
        Arrays.sort(arr);
        return arr[arr.length - 2];
    }

    public int optimal(int[] arr) {
        int max = 0;
        for (int i = 1; i < arr.length; i++)
            if (arr[i] > arr[max]) max = i;

        arr[max] = Integer.MIN_VALUE;

        int second = 0;
        for (int i = 1; i < arr.length; i++)
            if (arr[i] > arr[second]) second = i;

        return arr[second];
    }
}
